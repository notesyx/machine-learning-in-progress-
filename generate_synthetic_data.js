function generateSyntheticTraffic(numInstances) {
    const syntheticData = [];
    
    
    for (let i = 0; i < numInstances / 2; i++) {
        const sourceIP = generateRandomIP(); 
        const destIP = generateRandomIP(); 
        const protocol = Math.random() < 0.5 ? 'TCP' : 'UDP'; 
        const port = Math.floor(Math.random() * 65536); 
        const packetSize = Math.floor(Math.random() * 1500); 
        
        syntheticData.push({
            sourceIP,
            destIP,
            protocol,
            port,
            packetSize,
            label: 'normal'
        });
    }
    
    
     for (let i = 0; i < numInstances / 2; i++) {
     const sourceIP = generateRandomIP(); 
        const destIP = generateRandomIP(); 
        const protocol = Math.random() < 0.5 ? 'TCP' : 'UDP'; 
        const port = Math.random() < 0.5 ? 80 : 443;
        const packetSize = Math.floor(Math.random() * 1500); 
        
        syntheticData.push({
            sourceIP,
            destIP,
            protocol,
            port,
            packetSize,
            label: 'malicious'
        });
    }
    
    return syntheticData;
}

function generateRandomIP() {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
}


const syntheticData = generateSyntheticTraffic(100);

console.log(syntheticData);
