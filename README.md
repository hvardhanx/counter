# Counter

## How to run

```bash
git pull git@github.com:hvardhanx/counter.git
cd counter
meteor
```

### If you run into problems like

``` bash
W20201025-08:18:48.031(5.5)? (STDERR) /Users/<username>/<folder≥/<folder>/counter/.meteor/local/build/programs/server/boot.js:468
W20201025-08:18:48.083(5.5)? (STDERR)   }).run();
W20201025-08:18:48.084(5.5)? (STDERR)      ^
W20201025-08:18:48.084(5.5)? (STDERR)
W20201025-08:18:48.084(5.5)? (STDERR) Error:
W20201025-08:18:48.084(5.5)? (STDERR) The @babel/runtime npm package could not be found in your node_modules
W20201025-08:18:48.084(5.5)? (STDERR) directory. Please run the following command to install it:
```

Fix:

```bash
meteor npm install --save @babel/runtime react react-dom
```
