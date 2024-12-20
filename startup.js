/** @param {NS} ns */
export async function main(ns) {
    // Array of all servers that don't need any ports opened
    // to gain root access. These have 16 GB of RAM
    const servers0Port = ["sigma-cosmetics",
                        "joesguns",
                        "nectar-net",
                        "foodnstuff",
                        "n00dles",
                        "hong-fang-tea",
                        "harakiri-sushi"];

    // Array of all servers that only need 1 port opened
    // to gain root access. These have 32 GB of RAM
    const servers1Port = ["neo-net",
                        "zer0",
                        "max-hardware",
                        "iron-gym",
                        "CSEC"];
    
    // Array of all servers that only need 2 ports opened
    const servers2Port = ["johnson-ortho",
                        "omega-net",
                        "crush-fitness",
                        "phantasy",
                        "the-hub",
                        "silver-helix",
                        "avmnite-02h"
                        ];
    
    // Array of all servers that only need 3 ports opened
    const servers3Port = ["netlink",
                        "rothman-uni",
                        "I.I.I.I",
                        "summit-uni",
                        "computek",
                        "catalyst",
                        "millenium-fitness",
                        "rho-construction"
                        ];

    // Array of all servers that only need 4 ports opened
    const servers4Port = ["nova-med",
                        "univ-energy",
                        "snap-fitness",
                        "alpha-ent",
                        "unitalife",
                        "zb-def",
                        "lexo-corp",
                        "syscore",
                        "global-pharm",
                        "aevum-police",
                        "syscore",
                        "run4theh111z",
                        "applied-energetics",
                        "."
                        ];

    // Array of all servers that only need 5 ports opened
    const servers5Port = ["zb-institute",
                        "taiyang-digital",
                        "infocomm",
                        "defcomm",
                        "deltaone",
                        "darkweb",
                        "zeus-med",
                        "icarus",
                        "solaris",
                        "aerocorp",
                        "omnia",
                        "galactic-cyber",
                        "blade",
                        "4sigma",
                        "omnitek",
                        "vitalife",
                        "nwo",
                        "kuai-gong",
                        "helios",
                        "fulcrumtech",
                        "microdyne",
                        "The-Cave",
                        "megacorp",
                        "powerhouse-fitness",
                        "ecorp",
                        "clarkinc",
                        "fulcrumassets",
                        "b-and-a",
                        "stormtech",
                        "titan-labs",
                        "w0r1d_d43m0n"
                        ];

    // Copy our scripts onto each server that requires 0 ports
    // to gain root access. Then use nuke() to gain admin access and
    // run the scripts.
    for (let i = 0; i < servers0Port.length; ++i) {
        const serv = servers0Port[i];

        ns.scp("early-hack-template.js", serv);
        ns.nuke(serv);
        ns.exec("early-hack-template.js", serv, 6);
        //ns.singularity.installBackdoor(serv);
    }

    // Wait until we acquire the "BruteSSH.exe" program
    while (!ns.fileExists("BruteSSH.exe")) {
        await ns.sleep(60000);
    }

    // Copy our scripts onto each server that requires 1 port
    // to gain root access. Then use brutessh() and nuke()
    // to gain admin access and run the scripts.
    // the backdoor install should only be uncommented 
    // when you unlock sigularities
    for (let i = 0; i < servers1Port.length; ++i) {
        const serv = servers1Port[i];

        ns.scp("early-hack-template.js", serv);
        ns.brutessh(serv);
        ns.nuke(serv);
        ns.exec("early-hack-template.js", serv, 12);
        //ns.singularity.installBackdoor(serv);
    }

    // Wait until we acquire the "RelaySMTP.exe" program
    while (!ns.fileExists("RelaySMTP.exe")) {
        await ns.sleep(60000);
    }

    // Copy our scripts onto each server that requires 2 ports
    // to gain root access. Then use brutessh() and relaysmtp() and nuke()
    // to gain admin access and run the scripts.
    // the backdoor install should only be uncommented 
    // when you unlock sigularities
    for (let i = 0; i < servers2Port.length; ++i) {
        const serv = servers2Port[i];

        ns.scp("early-hack-template.js", serv);
        ns.brutessh(serv);
        ns.relaysmtp(serv);
        ns.nuke(serv);
        ns.exec("early-hack-template.js", serv, 12);
        //ns.singularity.installBackdoor(serv);
    }

    // Wait until we acquire the "FTPCrack.exe" program
    while (!ns.fileExists("FTPCrack.exe")) {
        await ns.sleep(60000);
    }

    // Copy our scripts onto each server that requires 3 ports
    // to gain root access. Then use brutessh() and relaysmtp() and FTPCrack() and nuke()
    // to gain admin access and run the scripts.
    // the backdoor install should only be uncommented 
    // when you unlock sigularities
    for (let i = 0; i < servers3Port.length; ++i) {
        const serv = servers3Port[i];

        ns.scp("early-hack-template.js", serv);
        ns.brutessh(serv);
        ns.relaysmtp(serv);
        ns.ftpcrack(serv);
        ns.nuke(serv);
        ns.exec("early-hack-template.js", serv, 12);
        //ns.singularity.installBackdoor(serv);
    }

    // Wait until we acquire the "HTTPWorm.exe" program
    while (!ns.fileExists("HTTPWorm.exe")) {
        await ns.sleep(60000);
    }

    // Copy our scripts onto each server that requires 4 ports
    // to gain root access. Then use brutessh() and relaysmtp() and FTPCrack() and HTTPWorm() and nuke()
    // to gain admin access and run the scripts.
    // the backdoor install should only be uncommented 
    // when you unlock sigularities
    for (let i = 0; i < servers4Port.length; ++i) {
        const serv = servers4Port[i];

        ns.scp("early-hack-template.js", serv);
        ns.brutessh(serv);
        ns.relaysmtp(serv);
        ns.ftpcrack(serv);
        ns.httpworm(serv);
        ns.nuke(serv);
        ns.exec("early-hack-template.js", serv, 12);
        //ns.singularity.installBackdoor(serv);
    }
    
    // Wait until we acquire the "SQLInject.exe" program
    while (!ns.fileExists("SQLInject.exe")) {
        await ns.sleep(60000);
    }

    // Copy our scripts onto each server that requires 5 ports
    // to gain root access. Then use brutessh() and relaysmtp() and FTPCrack() and HTTPWorm() and SQLInject() and nuke()
    // to gain admin access and run the scripts.
    // the backdoor install should only be uncommented 
    // when you unlock sigularities
    for (let i = 0; i < servers5Port.length; ++i) {
        const serv = servers5Port[i];

        ns.scp("early-hack-template.js", serv);
        ns.brutessh(serv);
        ns.relaysmtp(serv);
        ns.ftpcrack(serv);
        ns.httpworm(serv);
        ns.sqlinject(serv);
        ns.nuke(serv);
        ns.exec("early-hack-template.js", serv, 12);
        //ns.singularity.installBackdoor(serv);
    }
}
