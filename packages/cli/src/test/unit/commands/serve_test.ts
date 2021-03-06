/*
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {assert} from 'chai';
import * as polyserve from 'polyserve';
import * as sinon from 'sinon';

import {PolymerCli} from '../../../polymer-cli';

suite('serve', () => {
  suite('--npm and --component-dir', () => {
    let startServersStub: sinon.SinonStub;
    let getServerUrlsStub: sinon.SinonStub;

    setup(() => {
      startServersStub = sinon
                             .stub(polyserve, 'startServers')
                             // tslint:disable-next-line: no-any
                             .returns(Promise.resolve() as any);
      startServersStub.returns({
        kind: 'mainline',
      });

      getServerUrlsStub = sinon
                              .stub(polyserve, 'getServerUrls')
                              // tslint:disable-next-line: no-any
                              .returns(Promise.resolve() as any);
      getServerUrlsStub.returns({
        serverUrl: 'http://applications.example.com/',
        componentUrl: 'http://components.example.com/',
      });
    });

    teardown(() => {
      sinon.restore();
    });

    test(
        '--npm flag is passed to polyserve and sets the --component-dir flag',
        async () => {
          const cli = new PolymerCli(['serve', '--npm']);
          await cli.run();

          const serverOptions = startServersStub.args[0][0];
          assert.propertyVal(serverOptions, 'npm', true);
          assert.propertyVal(serverOptions, 'componentDir', 'node_modules/');
        });

    test(
        '--component-dir flag overrides the default setting caused by the ' +
            '--npm flag',
        async () => {
          const cli = new PolymerCli(
              ['serve', '--npm', '--component-dir=path/to/deps/']);
          await cli.run();

          const serverOptions = startServersStub.args[0][0];
          assert.propertyVal(serverOptions, 'npm', true);
          assert.propertyVal(serverOptions, 'componentDir', 'path/to/deps/');
        });

    test('--component-dir flag is passed to polyserve', async () => {
      const cli = new PolymerCli(['serve', '--component-dir=path/to/deps/']);
      await cli.run();

      const serverOptions = startServersStub.args[0][0];
      assert.propertyVal(serverOptions, 'npm', undefined);
      assert.propertyVal(serverOptions, 'componentDir', 'path/to/deps/');
    });

    test('--module-resolution default does not override config', async () => {
      const cli = new PolymerCli(['serve'], {moduleResolution: 'node'});
      await cli.run();

      const serverOptions = startServersStub.args[0][0];
      assert.propertyVal(serverOptions, 'moduleResolution', 'node');
    });
  });
});
