const { RandomForestClassifier } = require('random-forest');
const { metrics } = require('random-forest');

const dataset = [
  {
    sourceIP: '44.245.193.110',
    destIP: '242.85.90.12',
    protocol: 'UDP',
    port: 9139,
    packetSize: 470,
    label: 'normal'
  },
  {
    sourceIP: '143.149.234.230',
    destIP: '58.209.145.73',
    protocol: 'UDP',
    port: 34071,
    packetSize: 657,
    label: 'normal'
  },
  {
    sourceIP: '103.99.187.199',
    destIP: '130.144.124.156',
    protocol: 'UDP',
    port: 64778,
    packetSize: 1226,
    label: 'normal'
  },
  {
    sourceIP: '254.60.125.218',
    destIP: '231.156.58.116',
    protocol: 'TCP',
    port: 53279,
    packetSize: 168,
    label: 'normal'
  },
  {
    sourceIP: '13.148.75.3',
    destIP: '202.64.85.244',
    protocol: 'TCP',
    port: 61199,
    packetSize: 1188,
    label: 'normal'
  },
  {
    sourceIP: '54.84.165.141',
    destIP: '7.57.241.52',
    protocol: 'UDP',
    port: 50832,
    packetSize: 650,
    label: 'normal'
  },
  {
    sourceIP: '229.121.183.227',
    destIP: '137.19.132.68',
    protocol: 'TCP',
    port: 26591,
    packetSize: 830,
    label: 'normal'
  },
  {
    sourceIP: '219.177.207.8',
    destIP: '169.223.221.17',
    protocol: 'TCP',
    port: 54089,
    packetSize: 1034,
    label: 'normal'
  },
  {
    sourceIP: '138.17.143.141',
    destIP: '54.206.134.150',
    protocol: 'UDP',
    port: 58820,
    packetSize: 1139,
    label: 'normal'
  },
  {
    sourceIP: '25.229.165.226',
    destIP: '113.69.68.66',
    protocol: 'TCP',
    port: 29401,
    packetSize: 554,
    label: 'normal'
  },

];

const data = {
    X: dataset.map(entry => [entry.sourceIP, entry.destIP, entry.protocol, entry.port, entry.packetSize]),
    y: dataset.map(entry => entry.label)
};

const { X_train, X_test, y_train, y_test } = train_test_split(data, { test_size: 0.2, random_state: 42 });


const rfClassifier = new RandomForestClassifier({ n_estimators: 100, random_state: 42 });

rfClassifier.fit(X_train, y_train);


const y_pred = rfClassifier.predict(X_test);


const accuracy = accuracy_score(y_test, y_pred);
console.log("Accuracy:", accuracy);