const nodeshift = require('nodeshift');

const options = {
  osc: {
    strictSSL: false
  }
};

const Api = require('kubernetes-client');
const core = new Api.Core(Api.config.getInCluster());

console.log(core);

nodeshift.deployApplication(options).then((message) => {
  console.log('Application Depoyed');
}).catch((err) => {
  console.error('Error', err);
})
