// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "1",

      macros: [
        { function: "__e" },
        { function: "__c", vtp_value: "google.co.in" },
        { function: "__c", vtp_value: 0 },
        { vtp_signal: 0, function: "__c", vtp_value: 0 },
      ],
      tags: [
        {
          function: "__gct",
          vtp_trackingId: "G-NZQ8B5H1RB",
          vtp_sessionDuration: 0,
          tag_id: 1,
        },
        {
          function: "__ccd_em_outbound_click",
          priority: 0,
          original_activity_id: 2,
          vtp_includeParams: true,
          tag_id: 4,
        },
        {
          function: "__ccd_em_download",
          original_activity_id: 3,
          vtp_includeParams: true,
          tag_id: 5,
        },
        {
          function: "__ccd_em_video",
          original_activity_id: 4,
          vtp_includeParams: true,
          tag_id: 6,
        },
        {
          function: "__ccd_em_site_search",
          original_activity_id: 5,
          vtp_searchQueryParams: "q,s,search,query,keyword",
          vtp_includeParams: true,
          tag_id: 7,
        },
        {
          function: "__ccd_em_scroll",
          original_activity_id: 6,
          vtp_includeParams: true,
          tag_id: 8,
        },
        {
          function: "__ccd_em_page_view",
          original_activity_id: 7,
          vtp_historyEvents: true,
          vtp_includeParams: true,
          tag_id: 9,
        },
        {
          function: "__ccd_conversion_marking",
          original_activity_id: 8,
          vtp_conversionRules: [
            "list",
            [
              "map",
              "matchingRules",
              '{"type":5,"args":[{"stringValue":"purchase"},{"contextValue":{"namespaceType":1,"keyParts":["eventName"]}}]}',
            ],
          ],
          tag_id: 10,
        },
        {
          function: "__set_product_settings",
          original_activity_id: 9,
          vtp_foreignTldMacroResult: ["macro", 1],
          vtp_isChinaVipRegionMacroResult: ["macro", 2],
          tag_id: 11,
        },
        {
          function: "__ogt_google_signals",
          original_activity_id: 10,
          vtp_googleSignals: "DISABLED",
          vtp_serverMacroResult: ["macro", 3],
          tag_id: 12,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.init" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
        [
          ["if", 1],
          ["add", 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__set_product_settings",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [
          52,
          "d",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["c"], "containerId"],
          ],
        ],
        [
          "b",
          [15, "d"],
          "google_tld",
          [17, [15, "a"], "foreignTldMacroResult"],
        ],
        [
          "b",
          [15, "d"],
          "ga_restrict_domain",
          [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_outbound_click",
        [46, "a"],
        [
          50,
          "i",
          [46, "o"],
          [22, [28, [15, "o"]], [46, [36, [44]]]],
          [41, "p"],
          [3, "p", ""],
          [
            22,
            [1, [15, "o"], [17, [15, "o"], "href"]],
            [
              46,
              [
                53,
                [41, "q"],
                [3, "q", [2, [17, [15, "o"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "p",
                  [
                    39,
                    [23, [15, "q"], 0],
                    [17, [15, "o"], "href"],
                    [
                      2,
                      [17, [15, "o"], "href"],
                      "substring",
                      [7, 0, [15, "q"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "p"]],
        ],
        [
          50,
          "j",
          [46, "o"],
          [22, [28, [15, "o"]], [46, [36, [44]]]],
          [41, "p"],
          [3, "p", [17, [15, "o"], "hostname"]],
          [52, "q", [2, [15, "p"], "match", [7, "^www\\d*\\."]]],
          [
            22,
            [1, [15, "q"], [16, [15, "q"], 0]],
            [
              46,
              [
                3,
                "p",
                [
                  2,
                  [15, "p"],
                  "substring",
                  [7, [17, [16, [15, "q"], 0], "length"]],
                ],
              ],
            ],
          ],
          [36, [15, "p"]],
        ],
        [
          50,
          "k",
          [46, "o"],
          [22, [28, [15, "o"]], [46, [36, false]]],
          [52, "p", [2, [17, [15, "o"], "hostname"], "toLowerCase", [7]]],
          [41, "q"],
          [3, "q", [2, ["j", ["f", ["e"]]], "toLowerCase", [7]]],
          [41, "r"],
          [3, "r", [37, [17, [15, "p"], "length"], [17, [15, "q"], "length"]]],
          [
            22,
            [
              1,
              [18, [15, "r"], 0],
              [29, [2, [15, "q"], "charAt", [7, 0]], "."],
            ],
            [
              46,
              [32, [15, "r"], [3, "r", [37, [15, "r"], 1]]],
              [3, "q", [0, ".", [15, "q"]]],
            ],
          ],
          [
            22,
            [
              1,
              [19, [15, "r"], 0],
              [
                12,
                [2, [15, "p"], "indexOf", [7, [15, "q"], [15, "r"]]],
                [15, "r"],
              ],
            ],
            [46, [36, false]],
          ],
          [36, true],
        ],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "d", ["require", "internal.getRemoteConfigParameter"]],
        [52, "e", ["require", "getUrl"]],
        [52, "f", ["require", "parseUrl"]],
        [52, "g", ["require", "internal.sendGtagEvent"]],
        [52, "h", ["require", "getContainerVersion"]],
        [
          52,
          "l",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["h"], "containerId"],
          ],
        ],
        [52, "m", ["d", [15, "l"], "cross_domain_conditions"]],
        [
          52,
          "n",
          [
            "c",
            [
              8,
              "affiliateDomains",
              [15, "m"],
              "checkValidation",
              true,
              "waitForTags",
              false,
            ],
          ],
        ],
        [22, [28, [15, "n"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "o", "p"],
            [52, "q", ["f", [16, [15, "o"], "gtm.elementUrl"]]],
            [
              22,
              ["k", [15, "q"]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "r",
                    [
                      39,
                      [28, [28, [17, [15, "a"], "includeParams"]]],
                      [
                        8,
                        "link_id",
                        [16, [15, "o"], "gtm.elementId"],
                        "link_classes",
                        [16, [15, "o"], "gtm.elementClasses"],
                        "link_url",
                        ["i", [15, "q"]],
                        "link_domain",
                        ["j", [15, "q"]],
                        "outbound",
                        true,
                      ],
                      [8],
                    ],
                  ],
                  [43, [15, "r"], "event_callback", [15, "p"]],
                  ["g", [15, "l"], "click", [15, "r"]],
                ],
              ],
              [46, ["p"]],
            ],
          ],
          [15, "n"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ogt_google_signals",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [
          52,
          "d",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [
          52,
          "e",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["c"], "containerId"],
          ],
        ],
        [
          "b",
          [15, "e"],
          "google_signals",
          [20, [17, [15, "a"], "serverMacroResult"], 1],
        ],
        [
          22,
          [17, [15, "d"], "enableGa4OnoRemarketing"],
          [
            46,
            [
              "b",
              [15, "e"],
              "google_ono",
              [20, [17, [15, "a"], "serverMacroResult"], 2],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_download",
        [46, "a"],
        [
          50,
          "h",
          [46, "n"],
          [
            36,
            [
              1,
              [15, "n"],
              [
                21,
                [
                  2,
                  [2, [15, "n"], "toLowerCase", [7]],
                  "match",
                  [7, [15, "g"]],
                ],
                [45],
              ],
            ],
          ],
        ],
        [
          50,
          "i",
          [46, "n"],
          [52, "o", [2, [17, [15, "n"], "pathname"], "split", [7, "."]]],
          [
            52,
            "p",
            [
              39,
              [18, [17, [15, "o"], "length"], 1],
              [16, [15, "o"], [37, [17, [15, "o"], "length"], 1]],
              "",
            ],
          ],
          [36, [16, [2, [15, "p"], "split", [7, "/"]], 0]],
        ],
        [
          50,
          "j",
          [46, "n"],
          [
            36,
            [
              39,
              [
                12,
                [2, [17, [15, "n"], "pathname"], "substring", [7, 0, 1]],
                "/",
              ],
              [17, [15, "n"], "pathname"],
              [0, "/", [17, [15, "n"], "pathname"]],
            ],
          ],
        ],
        [
          50,
          "k",
          [46, "n"],
          [41, "o"],
          [3, "o", ""],
          [
            22,
            [1, [15, "n"], [17, [15, "n"], "href"]],
            [
              46,
              [
                53,
                [41, "p"],
                [3, "p", [2, [17, [15, "n"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "o",
                  [
                    39,
                    [23, [15, "p"], 0],
                    [17, [15, "n"], "href"],
                    [
                      2,
                      [17, [15, "n"], "href"],
                      "substring",
                      [7, 0, [15, "p"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "o"]],
        ],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "d", ["require", "internal.sendGtagEvent"]],
        [52, "e", ["require", "parseUrl"]],
        [52, "f", ["require", "getContainerVersion"]],
        [
          52,
          "g",
          [
            0,
            "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|",
            "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma",
          ],
        ],
        [52, "l", ["c", [8, "checkValidation", true]]],
        [22, [28, [15, "l"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          52,
          "m",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["f"], "containerId"],
          ],
        ],
        [
          "b",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "n", "o"],
            ["o"],
            [52, "p", [16, [15, "n"], "gtm.elementUrl"]],
            [52, "q", ["e", [15, "p"]]],
            [22, [28, [15, "q"]], [46, [36]]],
            [52, "r", ["i", [15, "q"]]],
            [
              22,
              ["h", [15, "r"]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "s",
                    [
                      39,
                      [28, [28, [17, [15, "a"], "includeParams"]]],
                      [
                        8,
                        "link_id",
                        [16, [15, "n"], "gtm.elementId"],
                        "link_url",
                        ["k", [15, "q"]],
                        "link_text",
                        [16, [15, "n"], "gtm.elementText"],
                        "file_name",
                        ["j", [15, "q"]],
                        "file_extension",
                        [15, "r"],
                      ],
                      [8],
                    ],
                  ],
                  ["d", [15, "m"], "file_download", [15, "s"]],
                ],
              ],
            ],
          ],
          [15, "l"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_video",
        [46, "a"],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnYouTubeActivity"]],
        [52, "d", ["require", "internal.sendGtagEvent"]],
        [52, "e", ["require", "getContainerVersion"]],
        [
          52,
          "f",
          [
            "c",
            [
              8,
              "captureComplete",
              true,
              "captureStart",
              true,
              "progressThresholdsPercent",
              [7, 10, 25, 50, 75],
            ],
          ],
        ],
        [22, [28, [15, "f"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          52,
          "g",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["e"], "containerId"],
          ],
        ],
        [
          "b",
          "gtm.video",
          [
            51,
            "",
            [7, "h", "i"],
            ["i"],
            [52, "j", [16, [15, "h"], "gtm.videoStatus"]],
            [41, "k"],
            [
              22,
              [20, [15, "j"], "start"],
              [46, [3, "k", "video_start"]],
              [
                46,
                [
                  22,
                  [20, [15, "j"], "progress"],
                  [46, [3, "k", "video_progress"]],
                  [
                    46,
                    [
                      22,
                      [20, [15, "j"], "complete"],
                      [46, [3, "k", "video_complete"]],
                    ],
                  ],
                ],
              ],
            ],
            [
              52,
              "l",
              [
                39,
                [28, [28, [17, [15, "a"], "includeParams"]]],
                [
                  8,
                  "video_current_time",
                  [16, [15, "h"], "gtm.videoCurrentTime"],
                  "video_duration",
                  [16, [15, "h"], "gtm.videoDuration"],
                  "video_percent",
                  [16, [15, "h"], "gtm.videoPercent"],
                  "video_provider",
                  [16, [15, "h"], "gtm.videoProvider"],
                  "video_title",
                  [16, [15, "h"], "gtm.videoTitle"],
                  "video_url",
                  [16, [15, "h"], "gtm.videoUrl"],
                  "visible",
                  [16, [15, "h"], "gtm.videoVisible"],
                ],
                [8],
              ],
            ],
            [
              22,
              [21, [15, "k"], [44]],
              [46, ["d", [15, "g"], [15, "k"], [15, "l"]]],
            ],
          ],
          [15, "f"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_site_search",
        [46, "a"],
        [
          50,
          "e",
          [46, "i"],
          [52, "j", [2, [30, [15, "i"], ""], "split", [7, ","]]],
          [
            53,
            [41, "k"],
            [3, "k", 0],
            [
              63,
              [7, "k"],
              [23, [15, "k"], [17, [15, "j"], "length"]],
              [33, [15, "k"], [3, "k", [0, [15, "k"], 1]]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "l",
                    ["b", [2, [16, [15, "j"], [15, "k"]], "trim", [7]]],
                  ],
                  [22, [21, [15, "l"], [44]], [46, [36, [15, "l"]]]],
                ],
              ],
            ],
          ],
        ],
        [
          50,
          "f",
          [46, "i", "j"],
          [52, "k", [8, "search_term", [15, "i"]]],
          [52, "l", [2, [30, [15, "j"], ""], "split", [7, ","]]],
          [
            53,
            [41, "m"],
            [3, "m", 0],
            [
              63,
              [7, "m"],
              [23, [15, "m"], [17, [15, "l"], "length"]],
              [33, [15, "m"], [3, "m", [0, [15, "m"], 1]]],
              [
                46,
                [
                  53,
                  [52, "n", [2, [16, [15, "l"], [15, "m"]], "trim", [7]]],
                  [52, "o", ["b", [15, "n"]]],
                  [
                    22,
                    [21, [15, "o"], [44]],
                    [46, [43, [15, "k"], [0, "q_", [15, "n"]], [15, "o"]]],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "k"]],
        ],
        [52, "b", ["require", "getQueryParameters"]],
        [52, "c", ["require", "internal.sendGtagEvent"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "g", ["e", [17, [15, "a"], "searchQueryParams"]]],
        [
          52,
          "h",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          [15, "g"],
          [
            46,
            [
              53,
              [
                52,
                "i",
                [
                  39,
                  [28, [28, [17, [15, "a"], "includeParams"]]],
                  ["f", [15, "g"], [17, [15, "a"], "additionalQueryParams"]],
                  [8],
                ],
              ],
              ["c", [15, "h"], "view_search_results", [15, "i"], true],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_page_view",
        [46, "a"],
        [
          22,
          [28, [17, [15, "a"], "historyEvents"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnHistoryChange"]],
        [52, "d", ["require", "internal.sendGtagEvent"]],
        [52, "e", ["require", "getContainerVersion"]],
        [52, "f", ["require", "internal.setRemoteConfigParameter"]],
        [52, "g", ["c", [8, "interval", 1000]]],
        [22, [28, [15, "g"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          52,
          "h",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["e"], "containerId"],
          ],
        ],
        [
          "b",
          "gtm.historyChange-v2",
          [
            51,
            "",
            [7, "i", "j"],
            ["j"],
            [52, "k", [16, [15, "i"], "gtm.oldUrl"]],
            [22, [20, [16, [15, "i"], "gtm.newUrl"], [15, "k"]], [46, [36]]],
            [52, "l", [16, [15, "i"], "gtm.historyChangeSource"]],
            [
              22,
              [
                1,
                [1, [21, [15, "l"], "pushState"], [21, [15, "l"], "popstate"]],
                [21, [15, "l"], "replaceState"],
              ],
              [46, [36]],
            ],
            [
              52,
              "m",
              [
                39,
                [28, [28, [17, [15, "a"], "includeParams"]]],
                [
                  8,
                  "page_location",
                  [16, [15, "i"], "gtm.newUrl"],
                  "page_referrer",
                  [15, "k"],
                ],
                [8],
              ],
            ],
            ["d", [15, "h"], "page_view", [15, "m"]],
            ["f", [15, "h"], "page_referrer", [15, "k"]],
          ],
          [15, "g"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_conversion_marking",
        [46, "a"],
        [
          50,
          "h",
          [46, "i"],
          [52, "j", [2, [15, "e"], "parse", [7, [15, "i"]]]],
          [
            22,
            [
              30,
              [30, [28, [15, "j"]], [28, [16, [15, "j"], "args"]]],
              [21, [17, [16, [15, "j"], "args"], "length"], 2],
            ],
            [46, [36]],
          ],
          [52, "k", [16, [16, [16, [15, "j"], "args"], 1], "contextValue"]],
          [
            22,
            [
              30,
              [
                30,
                [
                  30,
                  [28, [15, "k"]],
                  [21, [16, [15, "k"], "namespaceType"], 1],
                ],
                [21, [17, [16, [15, "k"], "keyParts"], "length"], 1],
              ],
              [21, [16, [16, [15, "k"], "keyParts"], 0], "eventName"],
            ],
            [46, [36, [44]]],
          ],
          [52, "l", [16, [16, [15, "j"], "args"], 0]],
          [36, [1, [15, "l"], [16, [15, "l"], "stringValue"]]],
        ],
        [
          22,
          [
            30,
            [28, [17, [15, "a"], "conversionRules"]],
            [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0],
          ],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]]],
        ],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "JSON"]],
        [
          52,
          "f",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [52, "g", [30, ["c", [15, "f"], "event_settings"], [8]]],
        [
          53,
          [41, "i"],
          [3, "i", 0],
          [
            63,
            [7, "i"],
            [23, [15, "i"], [17, [17, [15, "a"], "conversionRules"], "length"]],
            [33, [15, "i"], [3, "i", [0, [15, "i"], 1]]],
            [
              46,
              [
                53,
                [
                  52,
                  "j",
                  [
                    "h",
                    [
                      16,
                      [16, [17, [15, "a"], "conversionRules"], [15, "i"]],
                      "matchingRules",
                    ],
                  ],
                ],
                [22, [28, [15, "j"]], [46, [6]]],
                [41, "k"],
                [3, "k", [16, [15, "g"], [15, "j"]]],
                [
                  22,
                  [28, [15, "k"]],
                  [46, [3, "k", [8]], [43, [15, "g"], [15, "j"], [15, "k"]]],
                ],
                [43, [15, "k"], "conversion", true],
              ],
            ],
          ],
        ],
        ["b", [15, "f"], "event_settings", [15, "g"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_scroll",
        [46, "a"],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnScroll"]],
        [52, "d", ["require", "internal.sendGtagEvent"]],
        [52, "e", ["require", "getContainerVersion"]],
        [
          52,
          "f",
          [
            "c",
            [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90],
          ],
        ],
        [22, [28, [15, "f"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          52,
          "g",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["e"], "containerId"],
          ],
        ],
        [
          "b",
          "gtm.scrollDepth",
          [
            51,
            "",
            [7, "h", "i"],
            ["i"],
            [
              52,
              "j",
              [
                39,
                [28, [28, [17, [15, "a"], "includeParams"]]],
                [8, "percent_scrolled", [16, [15, "h"], "gtm.scrollThreshold"]],
                [8],
              ],
            ],
            ["d", [15, "g"], "scroll", [15, "j"]],
          ],
          [15, "f"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
    ],
    permissions: {
      __set_product_settings: { read_container_data: {} },
      __ccd_em_outbound_click: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        process_dom_events: {
          targets: [
            { targetType: "document", eventName: "click" },
            { targetType: "document", eventName: "auxclick" },
          ],
        },
        read_container_data: {},
      },
      __ogt_google_signals: { read_container_data: {} },
      __ccd_em_download: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        process_dom_events: {
          targets: [
            { targetType: "document", eventName: "click" },
            { targetType: "document", eventName: "auxclick" },
          ],
        },
        read_container_data: {},
      },
      __ccd_em_video: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.video"],
        },
        process_dom_events: {
          targets: [
            { targetType: "element", eventName: "onStateChange" },
            { targetType: "element", eventName: "onPlaybackRateChange" },
          ],
        },
        read_container_data: {},
      },
      __ccd_em_site_search: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        read_container_data: {},
      },
      __ccd_em_page_view: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.historyChange-v2"],
        },
        process_dom_events: {
          targets: [
            { targetType: "window", eventName: "pushstate" },
            { targetType: "window", eventName: "popstate" },
          ],
        },
        read_container_data: {},
      },
      __ccd_conversion_marking: { read_container_data: {} },
      __ccd_em_scroll: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.scrollDepth"],
        },
        process_dom_events: {
          targets: [
            { targetType: "window", eventName: "resize" },
            { targetType: "window", eventName: "scroll" },
          ],
        },
        read_container_data: {},
      },
    },

    security_groups: {
      google: [
        "__set_product_settings",
        "__ccd_em_outbound_click",
        "__ogt_google_signals",
        "__ccd_em_download",
        "__ccd_em_video",
        "__ccd_em_site_search",
        "__ccd_em_page_view",
        "__ccd_conversion_marking",
        "__ccd_em_scroll",
      ],
    },
  };

  /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var l,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca = function (a) {
      return (a.raw = a);
    },
    da = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: aa(a) };
    },
    ea =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ia = { a: !0 },
        ja = {};
      try {
        ja.__proto__ = ia;
        ha = ja.a;
        break a;
      } catch (a) {}
      ha = !1;
    }
    fa = ha
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ka = fa,
    la = function (a, b) {
      a.prototype = ea(b.prototype);
      a.prototype.constructor = a;
      if (ka) ka(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.$k = b.prototype;
    },
    ma = this || self,
    na = function (a) {
      return a;
    };
  var oa = function (a, b) {
    this.g = a;
    this.o = b;
  };
  var pa = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    },
    ra = function () {
      this.C = {};
      this.s = !1;
      this.I = {};
    },
    sa = function (a, b) {
      var c = [],
        d;
      for (d in a.C)
        if (a.C.hasOwnProperty(d))
          switch (((d = d.substr(5)), b)) {
            case 1:
              c.push(d);
              break;
            case 2:
              c.push(a.get(d));
              break;
            case 3:
              c.push([d, a.get(d)]);
          }
      return c;
    };
  ra.prototype.get = function (a) {
    return this.C["dust." + a];
  };
  ra.prototype.set = function (a, b) {
    this.s || ((a = "dust." + a), this.I.hasOwnProperty(a) || (this.C[a] = b));
  };
  ra.prototype.has = function (a) {
    return this.C.hasOwnProperty("dust." + a);
  };
  var ta = function (a, b) {
    b = "dust." + b;
    a.s || a.I.hasOwnProperty(b) || delete a.C[b];
  };
  ra.prototype.Lb = function () {
    this.s = !0;
  };
  var ua = function (a) {
    this.o = new ra();
    this.g = [];
    this.s = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (pa(b) ? (this.g[Number(b)] = a[Number(b)]) : this.o.set(b, a[b]));
  };
  l = ua.prototype;
  l.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.g.length; c++) {
      var d = this.g[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof ua
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(d.toString());
    }
    return b.join(",");
  };
  l.set = function (a, b) {
    if (!this.s)
      if ("length" === a) {
        if (!pa(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.g.length = Number(b);
      } else pa(a) ? (this.g[Number(a)] = b) : this.o.set(a, b);
  };
  l.get = function (a) {
    return "length" === a
      ? this.length()
      : pa(a)
      ? this.g[Number(a)]
      : this.o.get(a);
  };
  l.length = function () {
    return this.g.length;
  };
  l.Kb = function () {
    for (var a = sa(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
    return new ua(a);
  };
  var va = function (a, b) {
    pa(b) ? delete a.g[Number(b)] : ta(a.o, b);
  };
  l = ua.prototype;
  l.pop = function () {
    return this.g.pop();
  };
  l.push = function (a) {
    return this.g.push.apply(this.g, Array.prototype.slice.call(arguments));
  };
  l.shift = function () {
    return this.g.shift();
  };
  l.splice = function (a, b, c) {
    return new ua(this.g.splice.apply(this.g, arguments));
  };
  l.unshift = function (a) {
    return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments));
  };
  l.has = function (a) {
    return (pa(a) && this.g.hasOwnProperty(a)) || this.o.has(a);
  };
  l.Lb = function () {
    this.s = !0;
    Object.freeze(this.g);
    this.o.Lb();
  };
  var wa = function () {
    function a(f, g) {
      if (b[f]) {
        if (b[f].fe + g > b[f].max) throw Error("Quota exceeded");
        b[f].fe += g;
      }
    }
    var b = {},
      c = void 0,
      d = void 0,
      e = {
        Zj: function (f) {
          c = f;
        },
        hh: function () {
          c && a(c, 1);
        },
        bk: function (f) {
          d = f;
        },
        Mb: function (f) {
          d && a(d, f);
        },
        Bk: function (f, g) {
          b[f] = b[f] || { fe: 0 };
          b[f].max = g;
        },
        zj: function (f) {
          return (b[f] && b[f].fe) || 0;
        },
        reset: function () {
          b = {};
        },
        kj: a,
      };
    e.onFnConsume = e.Zj;
    e.consumeFn = e.hh;
    e.onStorageConsume = e.bk;
    e.consumeStorage = e.Mb;
    e.setMax = e.Bk;
    e.getConsumed = e.zj;
    e.reset = e.reset;
    e.consume = e.kj;
    return e;
  };
  var xa = function (a, b) {
    this.s = a;
    this.R = function (c, d, e) {
      return c.apply(d, e);
    };
    this.C = b;
    this.o = new ra();
    this.g = this.I = void 0;
  };
  xa.prototype.add = function (a, b) {
    ya(this, a, b, !1);
  };
  var ya = function (a, b, c, d) {
    if (!a.o.s)
      if (
        (a.s.Mb(
          ("string" === typeof b ? b.length : 1) +
            ("string" === typeof c ? c.length : 1)
        ),
        d)
      ) {
        var e = a.o;
        e.set(b, c);
        e.I["dust." + b] = !0;
      } else a.o.set(b, c);
  };
  xa.prototype.set = function (a, b) {
    this.o.s ||
      (!this.o.has(a) && this.C && this.C.has(a)
        ? this.C.set(a, b)
        : (this.s.Mb(
            ("string" === typeof a ? a.length : 1) +
              ("string" === typeof b ? b.length : 1)
          ),
          this.o.set(a, b)));
  };
  xa.prototype.get = function (a) {
    return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0;
  };
  xa.prototype.has = function (a) {
    return !!this.o.has(a) || !(!this.C || !this.C.has(a));
  };
  var za = function (a) {
    var b = new xa(a.s, a);
    a.I && (b.I = a.I);
    b.R = a.R;
    b.g = a.g;
    return b;
  };
  var Aa = function () {},
    Ca = function (a) {
      return "function" === typeof a;
    },
    m = function (a) {
      return "string" === typeof a;
    },
    Da = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ea = Array.isArray,
    Ga = function (a, b) {
      if (a && Ea(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ha = function (a, b) {
      if (!Da(a) || !Da(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ka = function (a, b) {
      for (var c = new Ja(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    La = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ma = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Na = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Oa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Pa = function (a) {
      var b = [];
      if (Ea(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ra = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Sa = function () {
      return new Date(Date.now());
    },
    Ta = function () {
      return Sa().getTime();
    },
    Ja = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ja.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ja.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ua = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Va = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Wa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Xa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ya = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Za = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    $a = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    ab = /^\w{1,9}$/,
    bb = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      La(a, function (d, e) {
        ab.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    cb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var db = function (a, b) {
    ra.call(this);
    this.R = a;
    this.cb = b;
  };
  la(db, ra);
  db.prototype.toString = function () {
    return this.R;
  };
  db.prototype.Kb = function () {
    return new ua(sa(this, 1));
  };
  db.prototype.g = function (a, b) {
    a.s.hh();
    return this.cb.apply(
      new eb(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  db.prototype.o = function (a, b) {
    try {
      return this.g.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var gb = function (a, b) {
      for (
        var c, d = 0;
        d < b.length && !((c = fb(a, b[d])), c instanceof oa);
        d++
      );
      return c;
    },
    fb = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof db))
          throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.g.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.I;
        d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
        throw e;
      }
    },
    eb = function (a, b) {
      this.o = a;
      this.g = b;
    },
    G = function (a, b) {
      return Ea(b) ? fb(a.g, b) : b;
    },
    I = function (a) {
      return a.o.R;
    };
  var hb = function () {
    ra.call(this);
  };
  la(hb, ra);
  hb.prototype.Kb = function () {
    return new ua(sa(this, 1));
  };
  var ib = {
    control: function (a, b) {
      return new oa(a, G(this, b));
    },
    fn: function (a, b, c) {
      var d = this.g,
        e = G(this, b);
      if (!(e instanceof ua))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      this.g.s.Mb(a.length + f.length);
      return new db(
        a,
        (function () {
          return function (g) {
            var h = za(d);
            void 0 === h.g && (h.g = this.g.g);
            for (
              var k = Array.prototype.slice.call(arguments, 0), n = 0;
              n < k.length;
              n++
            )
              if (((k[n] = G(this, k[n])), k[n] instanceof oa)) return k[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new ua(k));
            var r = gb(h, f);
            if (r instanceof oa) return "return" === r.g ? r.o : r;
          };
        })()
      );
    },
    list: function (a) {
      var b = this.g.s;
      b.Mb(arguments.length);
      for (var c = new ua(), d = 0; d < arguments.length; d++) {
        var e = G(this, arguments[d]);
        "string" === typeof e && b.Mb(e.length ? e.length - 1 : 0);
        c.push(e);
      }
      return c;
    },
    map: function (a) {
      for (
        var b = this.g.s, c = new hb(), d = 0;
        d < arguments.length - 1;
        d += 2
      ) {
        var e = G(this, arguments[d]) + "",
          f = G(this, arguments[d + 1]),
          g = e.length;
        g += "string" === typeof f ? f.length : 1;
        b.Mb(g);
        c.set(e, f);
      }
      return c;
    },
    undefined: function () {},
  };
  var jb = function () {
      this.s = wa();
      this.g = new xa(this.s);
    },
    kb = function (a, b, c) {
      var d = new db(b, c);
      d.Lb();
      a.g.set(b, d);
    },
    lb = function (a, b, c) {
      ib.hasOwnProperty(b) && kb(a, c || b, ib[b]);
    };
  jb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.o(c);
  };
  jb.prototype.o = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = fb(this.g, arguments[c]);
    return b;
  };
  jb.prototype.C = function (a, b) {
    var c = za(this.g);
    c.g = a;
    for (var d, e = 1; e < arguments.length; e++) d = d = fb(c, arguments[e]);
    return d;
  };
  var mb,
    nb = function () {
      if (void 0 === mb) {
        var a = null,
          b = ma.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: na,
              createScript: na,
              createScriptURL: na,
            });
          } catch (c) {
            ma.console && ma.console.error(c.message);
          }
          mb = a;
        } else mb = a;
      }
      return mb;
    };
  var pb = function (a, b) {
    this.g = b === ob ? a : "";
  };
  pb.prototype.toString = function () {
    return this.g + "";
  };
  var qb = function (a) {
      return a instanceof pb && a.constructor === pb
        ? a.g
        : "type_error:TrustedResourceUrl";
    },
    ob = {},
    rb = function (a) {
      var b = nb(),
        c = b ? b.createScriptURL(a) : a;
      return new pb(c, ob);
    };
  var sb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function tb() {
    var a = ma.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function ub(a) {
    return -1 != tb().indexOf(a);
  }
  var vb = {},
    wb = function (a, b, c) {
      this.g = c === vb ? a : "";
    };
  wb.prototype.toString = function () {
    return this.g.toString();
  };
  var xb = function (a) {
      return a instanceof wb && a.constructor === wb
        ? a.g
        : "type_error:SafeHtml";
    },
    yb = function (a) {
      var b = nb(),
        c = b ? b.createHTML(a) : a;
      return new wb(c, null, vb);
    }; /*
    
     SPDX-License-Identifier: Apache-2.0
    */
  var zb = {};
  var Ab = function () {},
    Bb = function (a) {
      this.g = a;
    };
  la(Bb, Ab);
  Bb.prototype.toString = function () {
    return this.g;
  };
  function Cb(a, b) {
    var c = [new Bb(Db[0].toLowerCase(), zb)];
    if (0 === c.length) throw Error("No prefixes are provided");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Bb) g = f.g;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Eb(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var z = window,
    J = document,
    Fb = navigator,
    Gb = J.currentScript && J.currentScript.src,
    Hb = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Ib = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Jb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Kb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Lb(a, b, c) {
    b &&
      La(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Mb = function (a, b, c, d) {
      var e = J.createElement("script");
      Lb(e, d, Jb);
      e.type = "text/javascript";
      e.async = !0;
      var f = rb(a);
      e.src = qb(f);
      var g,
        h,
        k,
        n =
          null ==
          (k = (h = ((e.ownerDocument && e.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : k.call(h, "script[nonce]");
      (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") &&
        e.setAttribute("nonce", g);
      Ib(e, b);
      c && (e.onerror = c);
      var p = J.getElementsByTagName("script")[0] || J.body || J.head;
      p.parentNode.insertBefore(e, p);
      return e;
    },
    Nb = function () {
      if (Gb) {
        var a = Gb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Ob = function (a, b, c, d, e) {
      var f = e,
        g = !1;
      f || ((f = J.createElement("iframe")), (g = !0));
      Lb(f, c, Kb);
      d &&
        La(d, function (k, n) {
          f.dataset[k] = n;
        });
      f.height = "0";
      f.width = "0";
      f.style.display = "none";
      f.style.visibility = "hidden";
      if (g) {
        var h = (J.body && J.body.lastChild) || J.body || J.head;
        h.parentNode.insertBefore(f, h);
      }
      Ib(f, b);
      void 0 !== a && (f.src = a);
      return f;
    },
    Pb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Qb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Rb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    K = function (a) {
      z.setTimeout(a, 0);
    },
    Sb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Tb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Ub = function (a) {
      var b = J.createElement("div"),
        c = b,
        d = yb("A<div>" + a + "</div>");
      void 0 !== c.tagName && Eb(c);
      c.innerHTML = d instanceof wb ? xb(d) : xb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Vb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Wb = function (a) {
      var b;
      try {
        b = Fb.sendBeacon && Fb.sendBeacon(a);
      } catch (c) {}
      b || Pb(a);
    },
    Yb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Zb = function (a) {
      var b = J.featurePolicy;
      return b && Ca(b.allowsFeature) ? b.allowsFeature(a) : !1;
    };
  var $b = function (a, b) {
      return G(this, a) && G(this, b);
    },
    ac = function (a, b) {
      return G(this, a) === G(this, b);
    },
    bc = function (a, b) {
      return G(this, a) || G(this, b);
    },
    cc = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    dc = function (a, b) {
      a = String(G(this, a));
      b = String(G(this, b));
      return a.substring(0, b.length) === b;
    },
    ec = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof hb &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var gc = function () {
    this.g = new jb();
    fc(this);
  };
  gc.prototype.execute = function (a) {
    return this.g.o(a);
  };
  var fc = function (a) {
    lb(a.g, "map");
    var b = function (c, d) {
      kb(a.g, c, d);
    };
    b("and", $b);
    b("contains", cc);
    b("equals", ac);
    b("or", bc);
    b("startsWith", dc);
    b("variable", ec);
  };
  var hc = function (a) {
    if (a instanceof hc) return a;
    this.ib = a;
  };
  hc.prototype.toString = function () {
    return String(this.ib);
  };
  var jc = function (a) {
    ra.call(this);
    this.g = a;
    this.set("then", ic(this));
    this.set("catch", ic(this, !0));
    this.set("finally", ic(this, !1, !0));
  };
  la(jc, hb);
  var ic = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new db("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof db || (d = void 0);
      e instanceof db || (e = void 0);
      var f = za(this.g),
        g = function (k) {
          return function (n) {
            return c ? (k.g(f), a.g) : k.g(f, n);
          };
        },
        h = a.g.then(d && g(d), e && g(e));
      return new jc(h);
    });
  }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var kc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    lc = function (a) {
      if (null == a) return String(a);
      var b = kc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    mc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    nc = function (a) {
      if (!a || "object" != lc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !mc(a, "constructor") &&
          !mc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || mc(a, b);
    },
    oc = function (a, b) {
      var c = b || ("array" == lc(a) ? [] : {}),
        d;
      for (d in a)
        if (mc(a, d)) {
          var e = a[d];
          "array" == lc(e)
            ? ("array" != lc(c[d]) && (c[d] = []), (c[d] = oc(e, c[d])))
            : nc(e)
            ? (nc(c[d]) || (c[d] = {}), (c[d] = oc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var qc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, k) {
          for (var n = sa(h, 1), p = 0; p < n.length; p++)
            k[n[p]] = g(h.get(n[p]));
        },
        g = function (h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (h instanceof ua) {
            var n = [];
            d.push(h);
            e.push(n);
            for (var p = h.Kb(), q = 0; q < p.length(); q++)
              n[p.get(q)] = g(h.get(p.get(q)));
            return n;
          }
          if (h instanceof jc) return h.g;
          if (h instanceof hb) {
            var r = {};
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          if (h instanceof db) {
            var u = function () {
              for (
                var v = Array.prototype.slice.call(arguments, 0), x = 0;
                x < v.length;
                x++
              )
                v[x] = pc(v[x], b, c);
              var y = b ? b.s : wa(),
                w = new xa(y);
              b && (w.g = b.g);
              return g(h.g.apply(h, [w].concat(v)));
            };
            d.push(h);
            e.push(u);
            f(h, u);
            return u;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (h instanceof hc && t) return h.ib;
          switch (typeof h) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return h;
            case "object":
              if (null === h) return null;
          }
        };
      return g(a);
    },
    pc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, k) {
          for (var n in h) h.hasOwnProperty(n) && k.set(n, g(h[n]));
        },
        g = function (h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (Ea(h) || Ma(h)) {
            var n = new ua([]);
            d.push(h);
            e.push(n);
            for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
            return n;
          }
          if (nc(h)) {
            var q = new hb();
            d.push(h);
            e.push(q);
            f(h, q);
            return q;
          }
          if ("function" === typeof h) {
            var r = new db("", function (w) {
              for (
                var A = Array.prototype.slice.call(arguments, 0), B = 0;
                B < A.length;
                B++
              )
                A[B] = qc(G(this, A[B]), b, c);
              return g((0, this.g.R)(h, h, A));
            });
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          var x = typeof h;
          if (null === h || "string" === x || "number" === x || "boolean" === x)
            return h;
          var y = !1;
          switch (c) {
            case 1:
              y = !0;
              break;
            case 2:
              y = !1;
              break;
            default:
          }
          if (void 0 !== h && y) return new hc(h);
        };
      return g(a);
    };
  var rc = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    sc = function (a) {
      if (void 0 === a || Ea(a) || nc(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    };
  var tc = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof ua)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new ua(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
      return new ua(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.g(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
      return new ua(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.g(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.g(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = rc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : va(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new ua(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = rc(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.g(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : va(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var uc =
      "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(
        " "
      ),
    vc = new oa("break"),
    wc = new oa("continue"),
    xc = function (a, b) {
      return G(this, a) + G(this, b);
    },
    yc = function (a, b) {
      return G(this, a) && G(this, b);
    },
    zc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      if (!(c instanceof ua))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't read property " + b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = qc(c.get(0));
            try {
              return a.toString(e);
            } catch (q) {}
          }
          return a.toString();
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if (0 <= uc.indexOf(b)) {
          var f = qc(c);
          return pc(a[b].apply(a, f), this.g);
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof ua) {
        if (a.has(b)) {
          var g = a.get(b);
          if (g instanceof db) {
            var h = rc(c);
            h.unshift(this.g);
            return g.g.apply(g, h);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if (0 <= tc.supportedMethods.indexOf(b)) {
          var k = rc(c);
          k.unshift(this.g);
          return tc[b].apply(a, k);
        }
      }
      if (a instanceof db || a instanceof hb) {
        if (a.has(b)) {
          var n = a.get(b);
          if (n instanceof db) {
            var p = rc(c);
            p.unshift(this.g);
            return n.g.apply(n, p);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof db ? a.R : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, rc(c));
      }
      if (a instanceof hc && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" + b + "' property.");
    },
    Ac = function (a, b) {
      a = G(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.g;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = G(this, b);
      c.set(a, d);
      return d;
    },
    Dc = function (a) {
      var b = za(this.g),
        c = gb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof oa) return c;
    },
    Ec = function () {
      return vc;
    },
    Fc = function (a) {
      for (var b = G(this, a), c = 0; c < b.length; c++) {
        var d = G(this, b[c]);
        if (d instanceof oa) return d;
      }
    },
    Gc = function (a) {
      for (var b = this.g, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = G(this, arguments[c + 1]);
          ya(b, d, e, !0);
        }
      }
    },
    Hc = function () {
      return wc;
    },
    Ic = function (a, b, c) {
      var d = new ua();
      b = G(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.g.add(a, G(this, f));
    },
    Jc = function (a, b) {
      return G(this, a) / G(this, b);
    },
    Kc = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      var c = a instanceof hc,
        d = b instanceof hc;
      return c || d ? (c && d ? a.ib == b.ib : !1) : a == b;
    },
    Lc = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = G(this, arguments[c]);
      return b;
    };
  function Mc(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = gb(f, d);
      if (g instanceof oa) {
        if ("break" === g.g) break;
        if ("return" === g.g) return g;
      }
    }
  }
  function Nc(a, b, c) {
    if ("string" === typeof b)
      return Mc(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof hb || b instanceof ua || b instanceof db) {
      var d = b.Kb(),
        e = d.length();
      return Mc(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var Oc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Nc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Pc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Nc(
        function (e) {
          var f = za(d);
          ya(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Qc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Nc(
        function (e) {
          var f = za(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    Sc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Rc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Tc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Rc(
        function (e) {
          var f = za(d);
          ya(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Uc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Rc(
        function (e) {
          var f = za(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function Rc(a, b, c) {
    if ("string" === typeof b)
      return Mc(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof ua)
      return Mc(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    throw new TypeError("The value is not iterable.");
  }
  var Vc = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var u = f.get(r);
          q.add(u, p.get(u));
        }
      }
      var f = G(this, a);
      if (!(f instanceof ua))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.g;
      d = G(this, d);
      var h = za(g);
      for (e(g, h); fb(h, b); ) {
        var k = gb(h, d);
        if (k instanceof oa) {
          if ("break" === k.g) break;
          if ("return" === k.g) return k;
        }
        var n = za(g);
        e(h, n);
        fb(n, c);
        h = n;
      }
    },
    Wc = function (a) {
      a = G(this, a);
      var b = this.g,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Xc = function (a, b) {
      var c;
      a = G(this, a);
      b = G(this, b);
      if (void 0 === a || null === a)
        throw Error("TypeError: cannot access property of " + a + ".");
      if (a instanceof hb || a instanceof ua || a instanceof db) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : pa(b) && (c = a[b]);
      else if (a instanceof hc) return;
      return c;
    },
    Yc = function (a, b) {
      return G(this, a) > G(this, b);
    },
    Zc = function (a, b) {
      return G(this, a) >= G(this, b);
    },
    $c = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      a instanceof hc && (a = a.ib);
      b instanceof hc && (b = b.ib);
      return a === b;
    },
    ad = function (a, b) {
      return !$c.call(this, a, b);
    },
    bd = function (a, b, c) {
      var d = [];
      G(this, a) ? (d = G(this, b)) : c && (d = G(this, c));
      var e = gb(this.g, d);
      if (e instanceof oa) return e;
    },
    dd = function (a, b) {
      return G(this, a) < G(this, b);
    },
    ed = function (a, b) {
      return G(this, a) <= G(this, b);
    },
    fd = function (a, b) {
      return G(this, a) % G(this, b);
    },
    gd = function (a, b) {
      return G(this, a) * G(this, b);
    },
    hd = function (a) {
      return -G(this, a);
    },
    id = function (a) {
      return !G(this, a);
    },
    jd = function (a, b) {
      return !Kc.call(this, a, b);
    },
    kd = function () {
      return null;
    },
    ld = function (a, b) {
      return G(this, a) || G(this, b);
    },
    md = function (a, b) {
      var c = G(this, a);
      G(this, b);
      return c;
    },
    nd = function (a) {
      return G(this, a);
    },
    od = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    pd = function (a) {
      return new oa("return", G(this, a));
    },
    qd = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't set property " + b + " of " + a + ".");
      (a instanceof db || a instanceof ua || a instanceof hb) && a.set(b, c);
      return c;
    },
    rd = function (a, b) {
      return G(this, a) - G(this, b);
    },
    sd = function (a, b, c) {
      a = G(this, a);
      var d = G(this, b),
        e = G(this, c);
      if (!Ea(d) || !Ea(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === G(this, d[h]))
          if (((f = G(this, e[h])), f instanceof oa)) {
            var k = f.g;
            if ("break" === k) return;
            if ("return" === k || "continue" === k) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = G(this, e[e.length - 1])),
        f instanceof oa && ("return" === f.g || "continue" === f.g))
      )
        return f;
    },
    td = function (a, b, c) {
      return G(this, a) ? G(this, b) : G(this, c);
    },
    ud = function (a) {
      a = G(this, a);
      return a instanceof db ? "function" : typeof a;
    },
    vd = function (a) {
      for (var b = this.g, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    wd = function (a, b, c, d) {
      var e = G(this, d);
      if (G(this, c)) {
        var f = gb(this.g, e);
        if (f instanceof oa) {
          if ("break" === f.g) return;
          if ("return" === f.g) return f;
        }
      }
      for (; G(this, a); ) {
        var g = gb(this.g, e);
        if (g instanceof oa) {
          if ("break" === g.g) break;
          if ("return" === g.g) return g;
        }
        G(this, b);
      }
    },
    xd = function (a) {
      return ~Number(G(this, a));
    },
    yd = function (a, b) {
      return Number(G(this, a)) << Number(G(this, b));
    },
    Bd = function (a, b) {
      return Number(G(this, a)) >> Number(G(this, b));
    },
    Cd = function (a, b) {
      return Number(G(this, a)) >>> Number(G(this, b));
    },
    Dd = function (a, b) {
      return Number(G(this, a)) & Number(G(this, b));
    },
    Ed = function (a, b) {
      return Number(G(this, a)) ^ Number(G(this, b));
    },
    Fd = function (a, b) {
      return Number(G(this, a)) | Number(G(this, b));
    };
  var Hd = function () {
    this.g = new jb();
    Gd(this);
  };
  Hd.prototype.execute = function (a) {
    return Id(this.g.o(a));
  };
  var Jd = function (a, b, c) {
      return Id(a.g.C(b, c));
    },
    Gd = function (a) {
      var b = function (d, e) {
        lb(a.g, d, String(e));
      };
      b("control", 49);
      b("fn", 51);
      b("list", 7);
      b("map", 8);
      b("undefined", 44);
      var c = function (d, e) {
        kb(a.g, String(d), e);
      };
      c(0, xc);
      c(1, yc);
      c(2, zc);
      c(3, Ac);
      c(53, Dc);
      c(4, Ec);
      c(5, Fc);
      c(52, Gc);
      c(6, Hc);
      c(9, Fc);
      c(50, Ic);
      c(10, Jc);
      c(12, Kc);
      c(13, Lc);
      c(47, Oc);
      c(54, Pc);
      c(55, Qc);
      c(63, Vc);
      c(64, Sc);
      c(65, Tc);
      c(66, Uc);
      c(15, Wc);
      c(16, Xc);
      c(17, Xc);
      c(18, Yc);
      c(19, Zc);
      c(20, $c);
      c(21, ad);
      c(22, bd);
      c(23, dd);
      c(24, ed);
      c(25, fd);
      c(26, gd);
      c(27, hd);
      c(28, id);
      c(29, jd);
      c(45, kd);
      c(30, ld);
      c(32, md);
      c(33, md);
      c(34, nd);
      c(35, nd);
      c(46, od);
      c(36, pd);
      c(43, qd);
      c(37, rd);
      c(38, sd);
      c(39, td);
      c(40, ud);
      c(41, vd);
      c(42, wd);
      c(58, xd);
      c(57, yd);
      c(60, Bd);
      c(61, Cd);
      c(56, Dd);
      c(62, Ed);
      c(59, Fd);
    };
  function Id(a) {
    if (
      a instanceof oa ||
      a instanceof db ||
      a instanceof ua ||
      a instanceof hb ||
      a instanceof hc ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var Kd = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      ai: a("consent"),
      Be: a("consent_always_fire"),
      cg: a("convert_case_to"),
      dg: a("convert_false_to"),
      eg: a("convert_null_to"),
      fg: a("convert_true_to"),
      gg: a("convert_undefined_to"),
      Lk: a("debug_mode_metadata"),
      Jb: a("function"),
      hf: a("instance_name"),
      Pi: a("live_only"),
      Qi: a("malware_disabled"),
      Ri: a("metadata"),
      Wi: a("original_activity_id"),
      Qk: a("original_vendor_template_id"),
      Pk: a("once_on_load"),
      Vi: a("once_per_event"),
      Mg: a("once_per_load"),
      Sk: a("priority_override"),
      Tk: a("respected_consent_types"),
      Sg: a("setup_tags"),
      Ug: a("tag_id"),
      Vg: a("teardown_tags"),
    };
  })();
  var fe;
  var ge = [],
    he = [],
    ie = [],
    je = [],
    ke = [],
    le = {},
    me,
    ne,
    qe,
    re = function (a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    se = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = le[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_"))
            e && d && d.gh && d.gh(a[g]),
              (f[void 0 !== e ? g : g.substr(4)] = a[g]);
          else if (g === Kd.Be.toString() && a[g]) {
          }
      e && d && d.fh && (f.vtp_gtmCachedValues = d.fh);
      if (b) {
        if (null == b.name) {
          var h;
          a: {
            var k = b.index;
            if (null == k) h = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = ge[k];
                  break;
                case 1:
                  n = je[k];
                  break;
                default:
                  h = "";
                  break a;
              }
              var p = n && n[Kd.hf];
              h = p ? String(p) : "";
            }
          }
          b.name = h;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : fe(c, f, b);
    },
    ue = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = te(a[e], b, c));
      return d;
    },
    te = function (a, b, c) {
      if (Ea(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(te(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ge[f];
            if (!g || b.If(g)) return;
            c[f] = !0;
            var h = String(g[Kd.hf]);
            try {
              var k = ue(g, b, c);
              k.vtp_gtmEventId = b.id;
              b.priorityId && (k.vtp_gtmPriorityId = b.priorityId);
              d = se(k, { event: b, index: f, type: 2, name: h });
              qe && (d = qe.lj(d, k));
            } catch (w) {
              b.zh && b.zh(w, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[te(a[n], b, c)] = te(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = te(a[q], b, c);
              ne && (p = p || r === ne.Ud);
              d.push(r);
            }
            return ne && p ? ne.pj(d) : d.join("");
          case "escape":
            d = te(a[1], b, c);
            if (ne && Ea(a[1]) && "macro" === a[1][0] && ne.Lj(a))
              return ne.hk(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Ld[a[u]] && (d = Ld[a[u]](d));
            return d;
          case "tag":
            var t = a[1];
            if (!je[t])
              throw Error("Unable to resolve tag reference " + t + ".");
            return (d = { oh: a[2], index: t });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var x = ve(v, b, c),
              y = !!a[4];
            return y || 2 !== x ? y !== (1 === x) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    ve = function (a, b, c) {
      try {
        return me(ue(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var we = function (a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.o = a;
    this.g = c;
  };
  la(we, Error);
  function xe(a, b) {
    if (Ea(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) xe(a[c], b[c]);
    }
  }
  var ye = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.ck = a;
    this.o = b;
    this.g = [];
  };
  la(ye, Error);
  var Ae = function () {
    return function (a, b) {
      a instanceof ye || (a = new ye(a, ze));
      b && a.g.push(b);
      throw a;
    };
  };
  function ze(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Da(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var De = function (a) {
      function b(r) {
        for (var u = 0; u < r.length; u++) d[r[u]] = !0;
      }
      for (var c = [], d = [], e = Be(a), f = 0; f < he.length; f++) {
        var g = he[f],
          h = Ce(g, e);
        if (h) {
          for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < je.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Ce = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Be = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = ve(ie[c], a));
        return b[c];
      };
    };
  var Ee = {
    lj: function (a, b) {
      b[Kd.cg] &&
        "string" === typeof a &&
        (a = 1 == b[Kd.cg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Kd.eg) && null === a && (a = b[Kd.eg]);
      b.hasOwnProperty(Kd.gg) && void 0 === a && (a = b[Kd.gg]);
      b.hasOwnProperty(Kd.fg) && !0 === a && (a = b[Kd.fg]);
      b.hasOwnProperty(Kd.dg) && !1 === a && (a = b[Kd.dg]);
      return a;
    },
  };
  var Fe = function () {
    this.g = {};
  };
  function Ge(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e].call(void 0, b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new we(c, d, g);
      }
  }
  function He(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.g[d],
          f = a.g.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Ge(e, b, d, g);
          Ge(f, b, d, g);
        }
      }
    };
  }
  var Le = function () {
      var a = data.permissions || {},
        b = Ie.J,
        c = this;
      this.o = new Fe();
      this.g = {};
      var d = {},
        e = He(this.o, b, function () {
          var f = arguments[0];
          return f && d[f]
            ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      La(a, function (f, g) {
        var h = {};
        La(g, function (k, n) {
          var p = Je(k, n);
          h[k] = p.assert;
          d[k] || (d[k] = p.W);
        });
        c.g[f] = function (k, n) {
          var p = h[k];
          if (!p)
            throw Ke(
              k,
              {},
              "The requested permission " + k + " is not configured."
            );
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    Ne = function (a) {
      return Me.g[a] || function () {};
    };
  function Je(a, b) {
    var c = re(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Ke;
    try {
      return se(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new we(e, {}, "Permission " + e + " is unknown.");
        },
        W: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Ke(a, b, c) {
    return new we(a, b, c);
  }
  var Oe = !1;
  var Pe = {};
  Pe.Kk = Oa("");
  Pe.sj = Oa("");
  var Qe = Oe,
    Re = Pe.sj,
    Se = Pe.Kk;
  var Te = function (a, b) {
    var c = String(a);
    return c;
  };
  var Ye = function (a) {
      var b = {},
        c = 0;
      La(a, function (e, f) {
        if (void 0 !== f)
          if (((f = Te(f, 100)), Ue.hasOwnProperty(e))) b[Ue[e]] = Ve(f);
          else if (We.hasOwnProperty(e)) {
            var g = We[e],
              h = Ve(f);
            b.hasOwnProperty(g) || (b[g] = h);
          } else if ("category" === e)
            for (var k = Ve(f).split("/", 5), n = 0; n < k.length; n++) {
              var p = Xe[n],
                q = k[n];
              b.hasOwnProperty(p) || (b[p] = q);
            }
          else
            10 > c && ((b["k" + c] = Ve(Te(e, 40))), (b["v" + c] = Ve(f)), c++);
      });
      var d = [];
      La(b, function (e, f) {
        d.push("" + e + f);
      });
      return d.join("~");
    },
    Ve = function (a) {
      return ("" + a).replace(/~/g, function () {
        return "~~";
      });
    },
    Ue = {
      item_id: "id",
      item_name: "nm",
      item_brand: "br",
      item_category: "ca",
      item_category2: "c2",
      item_category3: "c3",
      item_category4: "c4",
      item_category5: "c5",
      item_variant: "va",
      price: "pr",
      quantity: "qt",
      coupon: "cp",
      item_list_name: "ln",
      index: "lp",
      item_list_id: "li",
      discount: "ds",
      affiliation: "af",
      promotion_id: "pi",
      promotion_name: "pn",
      creative_name: "cn",
      creative_slot: "cs",
      location_id: "lo",
    },
    We = {
      id: "id",
      name: "nm",
      brand: "br",
      variant: "va",
      list_name: "ln",
      list_position: "lp",
      list: "ln",
      position: "lp",
      creative: "cn",
    },
    Xe = ["ca", "c2", "c3", "c4", "c5"];
  var Ze = function (a) {
      var b = [];
      La(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
      });
      return b.join("&");
    },
    $e = function (a, b, c, d) {
      this.ya = a.ya;
      this.Ub = a.Ub;
      this.V = a.V;
      this.g = b;
      this.C = c;
      this.s = Ze(a.ya);
      this.o = Ze(a.V);
      this.I = this.o.length;
      if (d && 16384 < this.I) throw Error("EVENT_TOO_LARGE");
    };
  var af = function () {
    this.events = [];
    this.g = this.ya = "";
    this.s = 0;
    this.o = !1;
  };
  af.prototype.add = function (a) {
    return this.C(a)
      ? (this.events.push(a),
        (this.ya = a.s),
        (this.g = a.g),
        (this.s += a.I),
        (this.o = a.C),
        !0)
      : !1;
  };
  af.prototype.C = function (a) {
    var b = 20 > this.events.length && 16384 > a.I + this.s,
      c = this.ya === a.s && this.g === a.g && this.o === a.C;
    return 0 == this.events.length || (b && c);
  };

  var bf = function (a, b) {
      La(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      });
    },
    cf = function (a, b) {
      var c = [];
      a.s && c.push(a.s);
      b && c.push("_s=" + b);
      bf(a.Ub, c);
      var d = !1;
      a.o && (c.push(a.o), (d = !0));
      var e = c.join("&"),
        f = "",
        g = e.length + a.g.length + 1;
      d && 2048 < g && ((f = c.pop()), (e = c.join("&")));
      return { Rf: e, body: f };
    },
    df = function (a, b) {
      var c = a.events;
      if (1 == c.length) return cf(c[0], b);
      var d = [];
      a.ya && d.push(a.ya);
      for (var e = {}, f = 0; f < c.length; f++)
        La(c[f].Ub, function (u, t) {
          null != t &&
            ((e[u] = e[u] || {}), (e[u][String(t)] = e[u][String(t)] + 1 || 1));
        });
      var g = {};
      La(e, function (u, t) {
        var v,
          x = -1,
          y = 0;
        La(t, function (w, A) {
          y += A;
          var B = (w.length + u.length + 2) * (A - 1);
          B > x && ((v = w), (x = B));
        });
        y == c.length && (g[u] = v);
      });
      bf(g, d);
      b && d.push("_s=" + b);
      for (
        var h = d.join("&"), k = [], n = {}, p = 0;
        p < c.length;
        n = { Ed: n.Ed }, p++
      ) {
        var q = [];
        n.Ed = {};
        La(
          c[p].Ub,
          (function (u) {
            return function (t, v) {
              g[t] != "" + v && (u.Ed[t] = v);
            };
          })(n)
        );
        c[p].o && q.push(c[p].o);
        bf(n.Ed, q);
        k.push(q.join("&"));
      }
      var r = k.join("\r\n");
      return { Rf: h, body: r };
    };
  var of =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    pf = { Fn: "function", DustMap: "Object", List: "Array" },
    M = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = of.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          k = c[d];
        if (null == k) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof k;
          k instanceof db
            ? (n = "Fn")
            : k instanceof ua
            ? (n = "List")
            : k instanceof hb
            ? (n = "DustMap")
            : k instanceof hc && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (pf[n] || n) +
                ", which does not match required type " +
                (pf[h] || h) +
                "."
            );
        }
      }
    };
  function qf(a) {
    return "" + a;
  }
  function rf(a, b) {
    var c = [];
    return c;
  }
  var sf = function (a, b) {
      var c = new db(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = G(this, d[e]);
        return b.apply(this, d);
      });
      c.Lb();
      return c;
    },
    tf = function (a, b) {
      var c = new hb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ca(e)
            ? c.set(d, sf(a + "_" + d, e))
            : (Da(e) || m(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Lb();
      return c;
    };
  var uf = function (a, b) {
    M(I(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new hb();
    return (d = tf("AssertApiSubject", c));
  };
  var vf = function (a, b) {
    M(I(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof jc)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new hb();
    return (d = tf("AssertThatSubject", c));
  };
  function zf(a) {
    return function () {
      for (var b = [], c = this.g, d = 0; d < arguments.length; ++d)
        b.push(qc(arguments[d], c));
      return pc(a.apply(null, b));
    };
  }
  var Bf = function () {
    for (var a = Math, b = Af, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = zf(a[e].bind(a)));
    }
    return c;
  };
  var Cf = function (a) {
    var b;
    return b;
  };
  var Df = function (a) {
    var b;
    return b;
  };
  var Ef = function (a) {
    return encodeURI(a);
  };
  var Ff = function (a) {
    return encodeURIComponent(a);
  };
  var Gf = function (a) {
    M(I(this), ["message:?string"], arguments);
  };
  var Hf = function (a, b) {
    M(I(this), ["min:!number", "max:!number"], arguments);
    return Ha(a, b);
  };
  var N = function (a, b, c) {
    var d = a.g.g;
    if (!d) throw Error("Missing program state.");
    d.fj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var If = function () {
    N(this, "read_container_data");
    var a = new hb();
    a.set("containerId", "G-NZQ8B5H1RB");
    a.set("version", "1");
    a.set("environmentName", "");
    a.set("debugMode", Qe);
    a.set("previewMode", Se);
    a.set("environmentMode", Re);
    a.Lb();
    return a;
  };
  var Jf = {};
  Jf.sstECEnableData = !0;
  Jf.enableAdsEc = !0;
  Jf.sstFFConversionEnabled = !0;
  Jf.sstEnableAuid = !0;
  Jf.enableGbraidUpdate = !0;
  Jf.enable1pScripts = !0;
  Jf.enableGlobalEventDeveloperIds = !1;
  Jf.enableGa4OnoRemarketing = !1;
  Jf.omitAuidIfWbraidPresent = !1;
  Jf.sstEnableDclid = !0;
  Jf.reconcileCampaignFields = !1;
  Jf.reconcileCampaignFields = !0;
  Jf.enableEmFormCcd = !1;
  Jf.enableEmFormCcdPart2 = !1;
  Jf.enableUrlPassthrough = !0;
  Jf.enableLandingPageDeduplication = !0;
  Jf.enableGtagDestinationFps = !0;
  Jf.enableFloodlightPrerenderingBypass = !1;
  Jf.enableHashTempClientId = !0;
  Jf.enableTranslateUAParamsToClassic = !0;
  Jf.analyticsPrivateParamsExcluded = !1;
  Jf.ipOverrideExperiment = !1;
  Jf.enableEmptyDestLists = !1;
  Jf.enableAdsHistoryChangeEvents = !1;
  Jf.requireGtagUserDataTos = !0;
  Jf.sendBeaconEnableExperimentPercentage = Number("0") || 0;
  function Kf() {
    return pc(Jf);
  }
  var Lf = function () {
    return new Date().getTime();
  };
  var Mf = function (a) {
    if (null === a) return "null";
    if (a instanceof ua) return "array";
    if (a instanceof db) return "function";
    if (a instanceof hc) {
      a = a.ib;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Nf = function (a) {
    return Na(qc(a, this.g));
  };
  var Of = function (a) {
    return Number(qc(a, this.g));
  };
  var Pf = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var Qf = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Af = "floor ceil round max min abs pow sqrt".split(" ");
  var Rf = function () {
      var a = {};
      return {
        Bj: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Ck: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    Sf = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return db.prototype.g.apply(a, c);
      };
    },
    Tf = function (a, b) {
      M(I(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var Uf = {};
  Uf.keys = function (a) {
    return new ua();
  };
  Uf.values = function (a) {
    return new ua();
  };
  Uf.entries = function (a) {
    return new ua();
  };
  Uf.freeze = function (a) {
    return a;
  };
  Uf.delete = function (a, b) {
    return !1;
  };
  var Wf = function () {
    this.g = {};
    this.o = {};
  };
  Wf.prototype.get = function (a, b) {
    var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
    return c;
  };
  Wf.prototype.add = function (a, b, c) {
    if (this.g.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.o.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.g[a] = c ? void 0 : Ca(b) ? sf(a, b) : tf(a, b);
  };
  var Yf = function (a, b, c) {
    if (a.o.hasOwnProperty(b))
      throw (
        "Attempting to add a private function which already exists: " + b + "."
      );
    if (a.g.hasOwnProperty(b))
      throw (
        "Attempting to add a private function with an existing API name: " +
        b +
        "."
      );
    a.o[b] = Ca(c) ? sf(b, c) : tf(b, c);
  };
  function Xf(a, b) {
    var c = void 0;
    return c;
  }
  function Zf() {
    var a = {};
    return a;
  }
  var Q = {
    Ib: "_ee",
    oc: "_syn_or_mod",
    Bb: "_def",
    Uk: "_uei",
    Vk: "_upi",
    kc: "_eu",
    Rk: "_pci",
    Jg: "_is_passthrough_cid",
    Ig: "_is_linker_valid",
    nf: "_ntg",
    Vd: "_nge",
    fc: "event_callback",
    Kd: "event_timeout",
    La: "gtag.config",
    Sa: "gtag.get",
    Aa: "purchase",
    ac: "refund",
    Cb: "begin_checkout",
    Yb: "add_to_cart",
    Zb: "remove_from_cart",
    ji: "view_cart",
    ig: "add_to_wishlist",
    Ba: "view_item",
    $b: "view_promotion",
    Ge: "select_promotion",
    Fe: "select_item",
    Db: "view_item_list",
    hg: "add_payment_info",
    ii: "add_shipping_info",
    fb: "value_key",
    rb: "value_callback",
    da: "allow_ad_personalization_signals",
    Xc: "restricted_data_processing",
    Jc: "allow_google_signals",
    Ea: "cookie_expires",
    cc: "cookie_update",
    Yc: "session_duration",
    Pd: "session_engaged_time",
    Id: "engagement_time_msec",
    Oa: "user_properties",
    ba: "transport_url",
    ka: "ads_data_redaction",
    Ga: "user_data",
    Sc: "first_party_collection",
    H: "ad_storage",
    T: "analytics_storage",
    Ce: "region",
    bg: "wait_for_update",
    Da: "conversion_linker",
    Ta: "conversion_cookie_prefix",
    oa: "value",
    ma: "currency",
    Dg: "trip_type",
    fa: "items",
    ug: "passengers",
    Je: "allow_custom_scripts",
    Hb: "session_id",
    zg: "quantity",
    ub: "transaction_id",
    tb: "language",
    Hd: "country",
    Gd: "allow_enhanced_conversions",
    Oe: "aw_merchant_id",
    Me: "aw_feed_country",
    Ne: "aw_feed_language",
    Le: "discount",
    aa: "developer_id",
    qg: "global_developer_id_string",
    og: "event_developer_id_string",
    Qd: "delivery_postal_code",
    Ue: "estimated_delivery_date",
    Se: "shipping",
    Ye: "new_customer",
    Pe: "customer_lifetime_value",
    Te: "enhanced_conversions",
    Ic: "page_view",
    va: "linker",
    U: "domains",
    ic: "decorate_forms",
    ng: "enhanced_conversions_automatic_settings",
    si: "auto_detection_enabled",
    We: "ga_temp_client_id",
    He: "user_engagement",
    di: "app_remove",
    ei: "app_store_refund",
    fi: "app_store_subscription_cancel",
    gi: "app_store_subscription_convert",
    hi: "app_store_subscription_renew",
    ki: "first_open",
    li: "first_visit",
    mi: "in_app_purchase",
    ni: "session_start",
    oi: "allow_display_features",
    eb: "campaign",
    Kc: "campaign_content",
    Lc: "campaign_id",
    Mc: "campaign_medium",
    Nc: "campaign_name",
    Oc: "campaign_source",
    Pc: "campaign_term",
    ra: "client_id",
    sa: "cookie_domain",
    bc: "cookie_name",
    pb: "cookie_path",
    Ua: "cookie_flags",
    Qc: "custom_map",
    Nd: "groups",
    sg: "non_interaction",
    hb: "page_location",
    Ze: "page_path",
    Va: "page_referrer",
    Wc: "page_title",
    Fa: "send_page_view",
    Gb: "send_to",
    Zc: "session_engaged",
    Rc: "euid_logged_in_state",
    $c: "session_number",
    Ji: "tracking_id",
    vb: "url_passthrough",
    hc: "accept_incoming",
    Vc: "url_position",
    xg: "phone_conversion_number",
    vg: "phone_conversion_callback",
    wg: "phone_conversion_css_class",
    yg: "phone_conversion_options",
    Ei: "phone_conversion_ids",
    Di: "phone_conversion_country_code",
    Eb: "aw_remarketing",
    Ke: "aw_remarketing_only",
    Ie: "gclid",
    ri: "auid",
    yi: "affiliation",
    mg: "tax",
    Re: "list_name",
    lg: "checkout_step",
    kg: "checkout_option",
    zi: "coupon",
    Ai: "promotions",
    Na: "user_id",
    Hi: "retoken",
    Ma: "cookie_prefix",
    jg: "disable_merchant_reported_purchases",
    xi: "dc_natural_search",
    wi: "dc_custom_params",
    rg: "method",
    Ii: "search_term",
    vi: "content_type",
    Ci: "optimize_id",
    Bi: "experiments",
    sb: "google_signals",
  };
  Q.Md = "google_tld";
  Q.Sd = "update";
  Q.Ve = "firebase_id";
  Q.Tc = "ga_restrict_domain";
  Q.Jd = "event_settings";
  Q.Qe = "dynamic_event_settings";
  Q.jc = "user_data_settings";
  Q.Bg = "screen_name";
  Q.af = "screen_resolution";
  Q.Fb = "_x_19";
  Q.qb = "enhanced_client_id";
  Q.Ld = "_x_20";
  Q.Xe = "internal_traffic_results";
  Q.Rd = "traffic_type";
  Q.Od = "referral_exclusion_definition";
  Q.Uc = "ignore_referrer";
  Q.ui = "content_group";
  Q.Ca = "allow_interest_groups";
  (Q.$e = "redact_device_info"), (Q.pg = "geo_granularity");
  var $f = {};
  Q.Fg = Object.freeze(
    (($f[Q.da] = 1),
    ($f[Q.Gd] = 1),
    ($f[Q.Jc] = 1),
    ($f[Q.fa] = 1),
    ($f[Q.sa] = 1),
    ($f[Q.Ea] = 1),
    ($f[Q.Ua] = 1),
    ($f[Q.bc] = 1),
    ($f[Q.pb] = 1),
    ($f[Q.Ma] = 1),
    ($f[Q.cc] = 1),
    ($f[Q.Qc] = 1),
    ($f[Q.aa] = 1),
    ($f[Q.Qe] = 1),
    ($f[Q.fc] = 1),
    ($f[Q.Jd] = 1),
    ($f[Q.Kd] = 1),
    ($f[Q.Sc] = 1),
    ($f[Q.Tc] = 1),
    ($f[Q.sb] = 1),
    ($f[Q.Md] = 1),
    ($f[Q.Nd] = 1),
    ($f[Q.Xe] = 1),
    ($f[Q.va] = 1),
    ($f[Q.Od] = 1),
    ($f[Q.Xc] = 1),
    ($f[Q.Fa] = 1),
    ($f[Q.Gb] = 1),
    ($f[Q.Yc] = 1),
    ($f[Q.Pd] = 1),
    ($f[Q.Qd] = 1),
    ($f[Q.ba] = 1),
    ($f[Q.Sd] = 1),
    ($f[Q.jc] = 1),
    ($f[Q.Oa] = 1),
    ($f[Q.kc] = 1),
    $f)
  );
  Q.Eg = Object.freeze([Q.hb, Q.Va, Q.Wc, Q.tb, Q.Bg, Q.Na, Q.Ve, Q.ui]);
  var ag = {};
  Q.Li = Object.freeze(
    ((ag[Q.di] = 1),
    (ag[Q.ei] = 1),
    (ag[Q.fi] = 1),
    (ag[Q.gi] = 1),
    (ag[Q.hi] = 1),
    (ag[Q.ki] = 1),
    (ag[Q.li] = 1),
    (ag[Q.mi] = 1),
    (ag[Q.ni] = 1),
    (ag[Q.He] = 1),
    ag)
  );
  var bg = {};
  Q.Gg = Object.freeze(
    ((bg[Q.hg] = 1),
    (bg[Q.ii] = 1),
    (bg[Q.Yb] = 1),
    (bg[Q.Zb] = 1),
    (bg[Q.ji] = 1),
    (bg[Q.Cb] = 1),
    (bg[Q.Fe] = 1),
    (bg[Q.Db] = 1),
    (bg[Q.Ge] = 1),
    (bg[Q.$b] = 1),
    (bg[Q.Aa] = 1),
    (bg[Q.ac] = 1),
    (bg[Q.Ba] = 1),
    (bg[Q.ig] = 1),
    bg)
  );
  Q.cf = Object.freeze([Q.da, Q.Jc, Q.cc]);
  Q.Ti = Object.freeze([].concat(Q.cf));
  Q.df = Object.freeze([Q.Ea, Q.Kd, Q.Yc, Q.Pd, Q.Id]);
  Q.Ui = Object.freeze([].concat(Q.df));
  var cg = {};
  Q.De = ((cg[Q.H] = "1"), (cg[Q.T] = "2"), cg);
  var eg = { jh: "IN", Ih: "IN-TG" };
  var fg = {},
    gg = function (a, b) {
      fg[a] = fg[a] || [];
      fg[a][b] = !0;
    },
    hg = function (a) {
      for (var b = [], c = fg[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    },
    ig = function () {
      for (var a = [], b = fg.GA4_EVENT || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var jg = function (a) {
    gg("GTM", a);
  };
  var kg = new (function (a, b) {
    this.g = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var mg = function () {
    var a = lg,
      b = "Gf";
    if (a.Gf && a.hasOwnProperty(b)) return a.Gf;
    var c = new a();
    a.Gf = c;
    a.hasOwnProperty(b);
    return c;
  };
  var lg = function () {
    var a = {};
    this.g = function () {
      var b = kg.g,
        c = kg.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.o = function () {
      a[kg.g] = !0;
    };
  };
  var ng = [];
  function og() {
    var a = Hb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: pg,
        update: qg,
        addListener: rg,
        notifyListeners: sg,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function pg(a, b, c, d, e, f) {
    var g = og();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries,
        k = h[a] || {},
        n = k.region,
        p = c && m(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === k.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: k.update,
            quiet: q,
          };
        if ("" !== d || !1 !== k.initial) h[a] = r;
        q &&
          z.setTimeout(function () {
            h[a] === r &&
              r.quiet &&
              ((r.quiet = !1), tg(a), sg(), gg("TAGGING", 2));
          }, f);
      }
    }
  }
  function qg(a, b) {
    var c = og();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = ug(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = ug(c, a);
      f.quiet ? ((f.quiet = !1), tg(a)) : g !== d && tg(a);
    }
  }
  function rg(a, b) {
    ng.push({ xf: a, wj: b });
  }
  function tg(a) {
    for (var b = 0; b < ng.length; ++b) {
      var c = ng[b];
      Ea(c.xf) && -1 !== c.xf.indexOf(a) && (c.Eh = !0);
    }
  }
  function sg(a, b) {
    for (var c = 0; c < ng.length; ++c) {
      var d = ng[c];
      if (d.Eh) {
        d.Eh = !1;
        try {
          d.wj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function ug(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var vg = function (a) {
      var b = og();
      b.accessedAny = !0;
      return ug(b, a);
    },
    wg = function (a) {
      var b = og();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    xg = function (a) {
      var b = og();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    yg = function () {
      if (!mg().g()) return !1;
      var a = og();
      a.accessedAny = !0;
      return a.active;
    },
    zg = function () {
      var a = og();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Ag = function (a, b) {
      og().addListener(a, b);
    },
    Bg = function (a, b) {
      og().notifyListeners(a, b);
    },
    Cg = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!xg(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Ag(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Dg = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var h = d[g];
          !1 === vg(h) || e[h] || (f.push(h), (e[h] = !0));
        }
        return f;
      }
      var d = m(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Ag(d, function (f) {
          var g = c();
          0 < g.length && ((f.xf = g), a(f));
        });
    };
  function Eg() {}
  function Fg() {}
  function Gg(a) {
    for (var b = [], c = 0; c < Hg.length; c++) {
      var d = a(Hg[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Hg = [Q.H, Q.T],
    Ig = function (a) {
      var b = a[Q.Ce];
      b && jg(40);
      var c = a[Q.bg];
      c && jg(41);
      for (
        var d = Ea(b) ? b : [b], e = { Cc: 0 };
        e.Cc < d.length;
        e = { Cc: e.Cc }, ++e.Cc
      )
        La(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== Q.Ce && g !== Q.bg) {
                var k = d[f.Cc],
                  n = eg.jh,
                  p = eg.Ih;
                og().set(g, h, k, n, p, c);
              }
            };
          })(e)
        );
    },
    Jg = 0,
    Kg = function (a, b) {
      La(a, function (e, f) {
        og().update(e, f);
      });
      Bg(b.eventId, b.priorityId);
      var c = Ta(),
        d = c - Jg;
      Jg && 0 <= d && 1e3 > d && jg(66);
      Jg = c;
    },
    Lg = function (a) {
      var b = vg(a);
      return void 0 != b ? b : !0;
    },
    Mg = function () {
      return "G1" + Gg(vg);
    },
    Ng = function (a, b) {
      Ag(a, b);
    },
    Og = function (a, b) {
      Dg(a, b);
    },
    Pg = function (a, b) {
      Cg(a, b);
    };
  var Rg = function (a) {
      return Qg ? J.querySelectorAll(a) : null;
    },
    Sg = function (a, b) {
      if (!Qg) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!J.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Tg = !1;
  if (J.querySelectorAll)
    try {
      var Ug = J.querySelectorAll(":root");
      Ug && 1 == Ug.length && Ug[0] == J.documentElement && (Tg = !0);
    } catch (a) {}
  var Qg = Tg;
  var Vg = function (a) {
      return null == a ? "" : m(a) ? Ra(String(a)) : "e0";
    },
    Xg = function (a) {
      return a.replace(Wg, "");
    },
    Zg = function (a) {
      return Yg(a.replace(/\s/g, ""));
    },
    Yg = function (a) {
      return Ra(a.replace($g, "").toLowerCase());
    },
    bh = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return ah.test(a) ? a : "e0";
    },
    dh = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (ch.test(c)) return c;
      }
      return "e0";
    },
    gh = function (a, b) {
      window.Promise || b([]);
      Promise.all(
        a.map(function (c) {
          return c.value && -1 !== eh.indexOf(c.name)
            ? fh(c.value).then(function (d) {
                c.value = d;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          b(a);
        })
        .catch(function () {
          b([]);
        });
    },
    fh = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle)
        try {
          var b = hh(a);
          return z.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return z
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      else return Promise.resolve("e1");
    },
    hh = function (a) {
      var b;
      if (z.TextEncoder) b = new z.TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    $g = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    ch = /^\S+@\S+\.\S+$/,
    ah = /^\+\d{10,15}$/,
    Wg = /[.~]/g,
    ih = {},
    jh =
      ((ih.email = "em"),
      (ih.phone_number = "pn"),
      (ih.first_name = "fn"),
      (ih.last_name = "ln"),
      (ih.street = "sa"),
      (ih.city = "ct"),
      (ih.region = "rg"),
      (ih.country = "co"),
      (ih.postal_code = "pc"),
      (ih.error_code = "ec"),
      ih),
    kh = function (a, b) {
      function c(n, p, q) {
        var r = n[p];
        Ea(r) || (r = [r]);
        for (var u = 0; u < r.length; ++u) {
          var t = Vg(r[u]);
          "" !== t && f.push({ name: p, value: q(t), index: void 0 });
        }
      }
      function d(n, p, q, r) {
        var u = Vg(n[p]);
        "" !== u && f.push({ name: p, value: q(u), index: r });
      }
      function e(n) {
        return function (p) {
          jg(64);
          return n(p);
        };
      }
      var f = [];
      if ("https:" === z.location.protocol) {
        c(a, "email", dh);
        c(a, "phone_number", bh);
        c(a, "first_name", e(Zg));
        c(a, "last_name", e(Zg));
        var g = a.home_address || {};
        c(g, "street", e(Yg));
        c(g, "city", e(Yg));
        c(g, "postal_code", e(Xg));
        c(g, "region", e(Yg));
        c(g, "country", e(Xg));
        var h = a.address || {};
        Ea(h) || (h = [h]);
        for (var k = 0; k < h.length; k++)
          d(h[k], "first_name", Zg, k),
            d(h[k], "last_name", Zg, k),
            d(h[k], "street", Yg, k),
            d(h[k], "city", Yg, k),
            d(h[k], "postal_code", Xg, k),
            d(h[k], "region", Yg, k),
            d(h[k], "country", Xg, k);
        gh(f, b);
      } else f.push({ name: "error_code", value: "e3", index: void 0 }), b(f);
    },
    lh = function (a, b) {
      kh(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            h = c[f].value,
            k = c[f].index,
            n = jh[g];
          n &&
            h &&
            (-1 === eh.indexOf(g) ||
              /^e\d+$/.test(h) ||
              /^[0-9A-Za-z_-]{43}$/.test(h)) &&
            (void 0 !== k && (n += k), d.push(n + "." + h), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    mh = function (a) {
      if (z.Promise)
        try {
          return new Promise(function (b) {
            lh(a, function (c, d) {
              b({ te: c, Zk: d });
            });
          });
        } catch (b) {}
    },
    eh = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var nh = {},
    S = (z.google_tag_manager = z.google_tag_manager || {}),
    oh = Math.random();
  nh.Zd = "520";
  nh.ca = "dataLayer";
  nh.ci =
    "ChEI8KXDkwYQ48mSzq+GhO/8ARIlAPOUfb/chWooidghPUINGvX7ODqhnB4rvkt5uL3myTh5mB5tHBoC1g4\x3d";
  var ph = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    qh = { __paused: !0, __tg: !0 },
    rh;
  for (rh in ph) ph.hasOwnProperty(rh) && (qh[rh] = !0);
  nh.Hc = "www.googletagmanager.com";
  var sh,
    th = nh.Hc + "/gtm.js";
  th = nh.Hc + "/gtag/js";
  sh = th;
  var uh = Oa(""),
    vh = null,
    wh = null,
    xh = {},
    yh = {},
    Gh = function () {
      var a = S.sequence || 1;
      S.sequence = a + 1;
      return a;
    };
  nh.bi = "";
  var Hh = "";
  nh.$d = Hh;
  var Ih = new Ja(),
    Jh = {},
    Kh = {},
    Nh = {
      name: nh.ca,
      set: function (a, b) {
        oc($a(a, b), Jh);
        Lh();
      },
      get: function (a) {
        return Mh(a, 2);
      },
      reset: function () {
        Ih = new Ja();
        Jh = {};
        Lh();
      },
    },
    Mh = function (a, b) {
      return 2 != b ? Ih.get(a) : Oh(a);
    },
    Oh = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Jh, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Ph = function (a, b) {
      Kh.hasOwnProperty(a) || (Ih.set(a, b), oc($a(a, b), Jh), Lh());
    },
    Qh = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = Mh(c, 1);
        if (Ea(d) || nc(d)) d = oc(d);
        Kh[c] = d;
      }
    },
    Lh = function (a) {
      La(Kh, function (b, c) {
        Ih.set(b, c);
        oc($a(b), Jh);
        oc($a(b, c), Jh);
        a && delete Kh[b];
      });
    },
    Rh = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Oh(a) : Ih.get(a);
      "array" === lc(d) || "object" === lc(d) ? (c = oc(d)) : (c = d);
      return c;
    };
  var Sh,
    Th = !1;
  function Uh() {
    Th = !0;
    Sh = Sh || {};
  }
  var Vh = function (a) {
    Th || Uh();
    return Sh[a];
  };
  var Wh = function (a) {
    if (J.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
      return !0;
    var c = z.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var h = g.indexOf("opacity(");
        0 <= h &&
          ((g = g.substring(h + 8, g.indexOf(")", h))),
          "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = z.getComputedStyle(d, null));
    }
    return !1;
  };
  var Xh = function () {
      var a = J.body,
        b = J.documentElement || (a && a.parentElement),
        c,
        d;
      if (J.compatMode && "BackCompat" !== J.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        jg(7);
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    },
    Yh = function (a) {
      var b = Xh(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    };
  var Zh = [],
    $h = !(!z.IntersectionObserver || !z.IntersectionObserverEntry),
    ai = function (a, b, c) {
      for (
        var d = new z.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < Zh.length; f++) if (!Zh[f]) return (Zh[f] = d), f;
      return Zh.push(d) - 1;
    },
    bi = function (a, b, c) {
      function d(h, k) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: h.getBoundingClientRect(),
            intersectionRatio: k,
            intersectionRect: n,
            isIntersecting: 0 < k,
            rootBounds: n,
            target: h,
            time: Ta(),
          };
        K(function () {
          return a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (h, k) {
        return h - k;
      });
      return function () {
        for (var h = 0; h < b.length; h++) {
          var k = Yh(b[h]);
          if (k > e[h])
            for (; f[h] < c.length - 1 && k >= c[f[h] + 1]; )
              d(b[h], k), f[h]++;
          else if (k < e[h])
            for (; 0 <= f[h] && k <= c[f[h]]; ) d(b[h], k), f[h]--;
          e[h] = k;
        }
      };
    },
    ci = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        1 < c[d] ? (c[d] = 1) : 0 > c[d] && (c[d] = 0);
      if ($h) {
        var e = !1;
        K(function () {
          e || bi(a, b, c)();
        });
        return ai(
          function (f) {
            e = !0;
            for (var g = { Bc: 0 }; g.Bc < f.length; g = { Bc: g.Bc }, g.Bc++)
              K(
                (function (h) {
                  return function () {
                    return a(f[h.Bc]);
                  };
                })(g)
              );
          },
          b,
          c
        );
      }
      return z.setInterval(bi(a, b, c), 1e3);
    },
    di = function (a) {
      $h
        ? 0 <= a &&
          a < Zh.length &&
          Zh[a] &&
          (Zh[a].disconnect(), (Zh[a] = void 0))
        : z.clearInterval(a);
    };
  var ei = /:[0-9]+$/,
    fi = function (a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var h = f[g].split("=");
        if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
          var k = h.slice(1).join("=");
          if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
          e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "));
        }
      }
      return c ? e : void 0;
    },
    ii = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = gi(a.protocol) || gi(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(ei, "")
            .toLowerCase());
      return hi(a, b, c, d, e);
    },
    hi = function (a, b, c, d, e) {
      var f,
        g = gi(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = ji(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(ei, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || gg("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var k = f.split("/");
          0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
          f = k.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = fi(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    gi = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    ji = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    ki = function (a) {
      var b = J.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || gg("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(ei, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    li = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = ki(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var k = "" + f + g + h;
      "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
      return k;
    };
  var mi = {};
  var oi = function (a, b, c) {
      if (a) {
        var d = a.element,
          e = { $a: a.$a, tagName: d.tagName, type: 1 };
        b && (e.querySelector = ni(d));
        c && (e.isVisible = !Wh(d));
        return e;
      }
    },
    ri = function (a) {
      if (0 != a.length) {
        var b;
        b = pi(a, function (c) {
          return !qi.test(c.$a);
        });
        b = pi(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = pi(b, function (c) {
          return !Wh(c.element);
        });
        return b[0];
      }
    },
    pi = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    ni = function (a) {
      var b;
      if (a === J.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = ni(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    si = !0,
    ti = !1;
  mi.Zh = "true";
  var ui = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    vi = new RegExp(/@(gmail|googlemail)\./i),
    qi = new RegExp(/support|noreply/i),
    wi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "),
    xi = ["BR"],
    yi = {},
    zi = function (a) {
      a = a || { yc: !0, zc: !0 };
      a.yb = a.yb || { email: !0, phone: !0, bh: !0 };
      var b,
        c = a,
        d = !!c.yc + "." + !!c.zc;
      c && c.fd && c.fd.length && (d += "." + c.fd.join("."));
      c && c.yb && (d += "." + c.yb.email + "." + c.yb.phone + "." + c.yb.bh);
      b = d;
      var e = yi[b];
      if (e && 200 > Ta() - e.timestamp) return e.result;
      var f;
      var g = [],
        h = J.body;
      if (h) {
        for (
          var k = h.querySelectorAll("*"), n = 0;
          n < k.length && 1e4 > n;
          n++
        ) {
          var p = k[n];
          if (
            !(0 <= wi.indexOf(p.tagName.toUpperCase())) &&
            p.children instanceof HTMLCollection
          ) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= xi.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || g.push(p);
          }
        }
        f = { elements: g, status: 1e4 < k.length ? "2" : "1" };
      } else f = { elements: g, status: "4" };
      var u = f,
        t = u.status,
        v = [],
        x;
      if (a.yb && a.yb.email) {
        for (var y = u.elements, w = [], A = 0; A < y.length; A++) {
          var B = y[A],
            E = B.textContent;
          "INPUT" === B.tagName.toUpperCase() && B.value && (E = B.value);
          if (E) {
            var C = E.match(ui);
            if (C) {
              var D = C[0],
                F;
              if (z.location) {
                var P = hi(z.location, "host", !0);
                F = 0 <= D.toLowerCase().indexOf(P);
              } else F = !1;
              F || w.push({ element: B, $a: D });
            }
          }
        }
        var H = a && a.fd;
        if (H && 0 !== H.length) {
          for (var L = [], U = 0; U < w.length; U++) {
            for (var R = !0, O = 0; O < H.length; O++) {
              var Z = H[O];
              if (Z && Sg(w[U].element, Z)) {
                R = !1;
                break;
              }
            }
            R && L.push(w[U]);
          }
          v = L;
        } else v = w;
        x = ri(v);
        10 < w.length && (t = "3");
      }
      var ba = [];
      !a.vk && x && (v = [x]);
      for (var T = 0; T < v.length; T++) ba.push(oi(v[T], a.yc, a.zc));
      var qa = { elements: ba.slice(0, 10), gk: oi(x, a.yc, a.zc), status: t };
      yi[b] = { timestamp: Ta(), result: qa };
      return qa;
    },
    Ai = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.$a.length + ":" + vi.test(a.$a)
      );
    };
  var Bi = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ("js_variable" === d) {
          e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
          for (var g = e.split(","), h = 0; h < g.length; h++) {
            var k = g[h].trim();
            if (k) {
              if (0 === k.indexOf("dataLayer.")) f = Mh(k.substring(10));
              else {
                var n = k.split(".");
                f = z[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ("css_selector" === d && Qg) {
          var q = Rg(e);
          if (q && 0 < q.length) {
            f = [];
            for (
              var r = 0;
              r < q.length &&
              r < ("email" === b || "phone_number" === b ? 5 : 1);
              r++
            )
              f.push(Tb(q[r]) || Ra(q[r].value));
            f = 1 === f.length ? f[0] : f;
          }
        }
        f && (a[b] = f);
      }
    },
    Ci = function (a) {
      if (a) {
        var b = {};
        Bi(b, "email", a.email);
        Bi(b, "phone_number", a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          Bi(e, "first_name", c[d].first_name);
          Bi(e, "last_name", c[d].last_name);
          Bi(e, "street", c[d].street);
          Bi(e, "city", c[d].city);
          Bi(e, "region", c[d].region);
          Bi(e, "country", c[d].country);
          Bi(e, "postal_code", c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    Di = function (a) {
      if (a)
        switch (a.mode) {
          case "selectors":
            return Ci(a.selectors);
          case "auto_detect":
            var b;
            var c = a.auto_detect;
            if (c) {
              var d = zi({
                  yc: !1,
                  zc: !1,
                  fd: c.exclude_element_selectors,
                  yb: { email: !!c.email, phone: !!c.phone, bh: !!c.address },
                }).elements,
                e = {};
              if (0 < d.length)
                for (var f = 0; f < d.length; f++) {
                  var g = d[f];
                  if (1 === g.type) {
                    e.email = g.$a;
                    break;
                  }
                }
              b = e;
            } else b = void 0;
            return b;
        }
    },
    Ei = function (a) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          var b = a.enhanced_conversions_manual_var;
          return void 0 !== b ? b : z.enhanced_conversion_data;
        case "automatic":
          return Ci(a[Q.ng]);
      }
    };
  var Fi = {},
    Gi = function (a, b) {
      if (z._gtmexpgrp && z._gtmexpgrp.hasOwnProperty(a))
        return z._gtmexpgrp[a];
      void 0 === Fi[a] && (Fi[a] = Math.floor(Math.random() * b));
      return Fi[a];
    };
  var Hi = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Ii = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var k = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        k && c && (k = decodeURIComponent(k));
        d.push(k);
      }
    }
    return d;
  };
  var Ji = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Ki = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function Li(a) {
    return "null" !== a.origin;
  }
  var Oi = function (a, b, c, d) {
      return Mi(d) ? Ii(a, String(b || Ni()), c) : [];
    },
    Ri = function (a, b, c, d, e) {
      if (Mi(e)) {
        var f = Pi(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Qi(
            f,
            function (g) {
              return g.je;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Qi(
            f,
            function (g) {
              return g.pd;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Si(a, b, c, d) {
    var e = Ni(),
      f = window;
    Li(f) && (f.document.cookie = a);
    var g = Ni();
    return e != g || (void 0 != c && 0 <= Oi(b, g, !1, d).indexOf(c));
  }
  var Wi = function (a, b, c, d) {
      function e(x, y, w) {
        if (null == w) return delete h[y], x;
        h[y] = w;
        return x + "; " + y + "=" + w;
      }
      function f(x, y) {
        if (null == y) return delete h[y], x;
        h[y] = !0;
        return x + "; " + y;
      }
      if (!Mi(c.lb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Ti(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      g = e(g, "expires", k);
      g = e(g, "max-age", c.Wj);
      g = e(g, "samesite", c.sk);
      c.uk && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Ui(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
          var t = "none" !== p[u] ? p[u] : void 0,
            v = e(g, "domain", t);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (x) {
            q = x;
            continue;
          }
          r = !0;
          if (!Vi(t, c.path) && Si(v, a, b, c.lb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return Vi(n, c.path) ? 1 : Si(g, a, b, c.lb) ? 0 : 1;
    },
    Xi = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Wi(a, b, c);
    };
  function Qi(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        k = b(h);
      k === c
        ? d.push(h)
        : void 0 === f || k < f
        ? ((e = [h]), (f = k))
        : k === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Pi(a, b, c) {
    for (var d = [], e = Oi(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = g.shift();
        k &&
          ((k = k.split("-")),
          d.push({ id: g.join("."), je: 1 * k[0] || 1, pd: 1 * k[1] || 1 }));
      }
    }
    return d;
  }
  var Ti = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Yi = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Zi = /(^|\.)doubleclick\.net$/i,
    Vi = function (a, b) {
      return (
        Zi.test(window.document.location.hostname) || ("/" === b && Yi.test(a))
      );
    },
    Ni = function () {
      return Li(window) ? window.document.cookie : "";
    },
    Ui = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Zi.test(e) || Yi.test(e) || a.push("none");
      return a;
    },
    Mi = function (a) {
      if (!mg().g() || !a || !yg()) return !0;
      if (!xg(a)) return !1;
      var b = vg(a);
      return null == b ? !0 : !!b;
    };
  var $i = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Hi(a) & 2147483647)) : String(b);
    },
    aj = function (a) {
      return [$i(a), Math.round(Ta() / 1e3)].join(".");
    },
    dj = function (a, b, c, d, e) {
      var f = bj(b);
      return Ri(a, f, cj(c), d, e);
    },
    ej = function (a, b, c, d) {
      var e = "" + bj(c),
        f = cj(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    bj = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    cj = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  function fj(a, b, c) {
    var d,
      e = Number(null != a.Sb ? a.Sb : void 0);
    0 !== e && (d = new Date((b || Ta()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var gj = ["1"],
    hj = {},
    ij = {},
    mj = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = jj(a.prefix);
      if (!hj[c] && !kj(c, a.path, a.domain) && b) {
        var d = jj(a.prefix),
          e = aj();
        if (0 === lj(d, e, a)) {
          var f = Hb("google_tag_data", {});
          f._gcl_au ? gg("GTM", 57) : (f._gcl_au = e);
        }
        kj(c, a.path, a.domain);
      }
    };
  function lj(a, b, c, d) {
    var e = ej(b, "1", c.domain, c.path),
      f = fj(c, d);
    f.lb = "ad_storage";
    return Xi(a, e, f);
  }
  function kj(a, b, c) {
    var d = dj(a, b, c, gj, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((hj[a] = e.slice(0, 2).join(".")),
        (ij[a] = { id: e.slice(2, 4).join("."), xh: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (ij[a] = { id: e.slice(0, 2).join("."), xh: Number(e[2]) || 0 })
      : (hj[a] = d);
    return !0;
  }
  function jj(a) {
    return (a || "_gcl") + "_au";
  }
  var nj = function (a) {
    for (
      var b = [],
        c = J.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          $f: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function oj(a, b) {
    var c = nj(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].$f] || (d[c[e].$f] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), Ha: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].$f].push(g);
      }
    }
    return d;
  }
  function pj() {
    for (var a = qj, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function rj() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var qj, sj;
  function tj(a) {
    function b(k) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = sj[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return k;
    }
    qj = qj || rj();
    sj = sj || pj();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var uj;
  var yj = function () {
      var a = vj,
        b = wj,
        c = xj(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Qb(J, "mousedown", d);
        Qb(J, "keyup", d);
        Qb(J, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    zj = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      xj().decorators.push(f);
    },
    Aj = function (a, b, c) {
      for (var d = xj().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var k = g.domains,
              n = a,
              p = !!g.sameHost;
            if (k && (p || n !== J.location.hostname))
              for (var q = 0; q < k.length; q++)
                if (k[q] instanceof RegExp) {
                  if (k[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(k[q]) ||
                  (p && 0 <= k[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Wa(e, g.callback());
        }
      }
      return e;
    };
  function xj() {
    var a = Hb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Bj = /(.*?)\*(.*?)\*(.*)/,
    Cj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Dj = /^(?:www\.|m\.|amp\.)+/,
    Ej = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Fj(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Hj = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (
          void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString()
        ) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            h = String(d);
          qj = qj || rj();
          sj = sj || pj();
          for (var k = [], n = 0; n < h.length; n += 3) {
            var p = n + 1 < h.length,
              q = n + 2 < h.length,
              r = h.charCodeAt(n),
              u = p ? h.charCodeAt(n + 1) : 0,
              t = q ? h.charCodeAt(n + 2) : 0,
              v = r >> 2,
              x = ((r & 3) << 4) | (u >> 4),
              y = ((u & 15) << 2) | (t >> 6),
              w = t & 63;
            q || ((w = 64), p || (y = 64));
            k.push(qj[v], qj[x], qj[y], qj[w]);
          }
          g = k.join("");
          f.call(e, g);
        }
      }
    var A = b.join("*");
    return ["1", Gj(A), A].join("*");
  };
  function Gj(a, b) {
    var c = [
        z.navigator.userAgent,
        new Date().getTimezoneOffset(),
        Fb.userLanguage || Fb.language,
        Math.floor(Ta() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = uj)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    uj = d;
    for (var k = 4294967295, n = 0; n < c.length; n++)
      k = (k >>> 8) ^ uj[(k ^ c.charCodeAt(n)) & 255];
    return ((k ^ -1) >>> 0).toString(36);
  }
  function Ij() {
    return function (a) {
      var b = ki(z.location.href),
        c = b.search.replace("?", ""),
        d = fi(c, "_gl", !1, !0) || "";
      a.query = Jj(d) || {};
      var e = ii(b, "fragment").match(Fj("_gl"));
      a.fragment = Jj((e && e[3]) || "") || {};
    };
  }
  function Kj(a, b) {
    var c = Fj(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Lj = function (a, b) {
      b || (b = "_gl");
      var c = Ej.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Kj(b, (c[2] || "").slice(1)),
        f = Kj(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Mj = function (a) {
      var b = Ij(),
        c = xj();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Wa(d, e.query), a && Wa(d, e.fragment));
      return d;
    },
    Jj = function (a) {
      try {
        var b = Nj(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = tj(d[e + 1]);
            c[f] = g;
          }
          gg("TAGGING", 6);
          return c;
        }
      } catch (h) {
        gg("TAGGING", 8);
      }
    };
  function Nj(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Bj.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          k;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Gj(h, p)) {
              k = !0;
              break a;
            }
          k = !1;
        }
        if (k) return h;
        gg("TAGGING", 7);
      }
    }
  }
  function Oj(a, b, c, d) {
    function e(p) {
      p = Kj(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Ej.exec(c);
    if (!f) return "";
    var g = f[1],
      h = f[2] || "",
      k = f[3] || "",
      n = a + "=" + b;
    d ? (k = "#" + e(k.substring(1))) : (h = "?" + e(h.substring(1)));
    return "" + g + h + k;
  }
  function Pj(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Aj(b, 1, c),
      e = Aj(b, 2, c),
      f = Aj(b, 3, c);
    if (Xa(d)) {
      var g = Hj(d);
      c ? Qj("_gl", g, a) : Rj("_gl", g, a, !1);
    }
    if (!c && Xa(e)) {
      var h = Hj(e);
      Rj("_gl", h, a, !0);
    }
    for (var k in f)
      if (f.hasOwnProperty(k))
        a: {
          var n = k,
            p = f[k],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Rj(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Qj(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Oj(n, p, q);
        }
  }
  function Rj(a, b, c, d) {
    if (c.href) {
      var e = Oj(a, b, c.href, void 0 === d ? !1 : d);
      sb.test(e) && (c.href = e);
    }
  }
  function Qj(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var k = J.createElement("input");
          k.setAttribute("type", "hidden");
          k.setAttribute("name", a);
          k.setAttribute("value", b);
          c.appendChild(k);
        }
      } else if ("post" === d) {
        var n = Oj(a, b, c.action);
        sb.test(n) && (c.action = n);
      }
    }
  }
  function vj(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Pj(e, e.hostname);
      }
    } catch (g) {}
  }
  function wj(a) {
    try {
      if (a.action) {
        var b = ii(ki(a.action), "host");
        Pj(a, b);
      }
    } catch (c) {}
  }
  var Sj = function (a, b, c, d) {
      yj();
      zj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Tj = function (a, b) {
      yj();
      zj(a, [hi(z.location, "host", !0)], b, !0, !0);
    },
    Uj = function () {
      var a = J.location.hostname,
        b = Cj.exec(J.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(Dj, ""),
        k = e.replace(Dj, ""),
        n;
      if (!(n = h === k)) {
        var p = "." + k;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Vj = function (a, b) {
      return !1 === a ? !1 : a || b || Uj();
    };
  var Wj = {};
  var Xj = /^\w+$/,
    Yj = /^[\w-]+$/,
    Zj = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    ak = function () {
      if (!mg().g() || !yg()) return !0;
      var a = vg("ad_storage");
      return null == a ? !0 : !!a;
    },
    bk = function (a, b) {
      xg("ad_storage")
        ? ak()
          ? a()
          : Dg(a, "ad_storage")
        : b
        ? gg("TAGGING", 3)
        : Cg(
            function () {
              bk(a, !0);
            },
            ["ad_storage"]
          );
    },
    dk = function (a) {
      return ck(a).map(function (b) {
        return b.Ha;
      });
    },
    ck = function (a) {
      var b = [];
      if (!Li(z) || !J.cookie) return b;
      var c = Oi(a, J.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Cd: d.Cd }, e++) {
        var f = ek(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.Cd = g.Ha;
          var k = g.timestamp,
            n = g.labels,
            p = Ga(
              b,
              (function (q) {
                return function (r) {
                  return r.Ha === q.Cd;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, k)),
              (p.labels = fk(p.labels, n || [])))
            : b.push({ version: h, Ha: d.Cd, timestamp: k, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return gk(b);
    };
  function fk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function hk(a) {
    return a && "string" == typeof a && a.match(Xj) ? a : "_gcl";
  }
  var jk = function () {
      var a = ki(z.location.href),
        b = ii(a, "query", !1, void 0, "gclid"),
        c = ii(a, "query", !1, void 0, "gclsrc"),
        d = ii(a, "query", !1, void 0, "wbraid"),
        e = ii(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || fi(f, "gclid", !1);
        c = c || fi(f, "gclsrc", !1);
        d = d || fi(f, "wbraid", !1);
      }
      return ik(b, c, e, d);
    },
    ik = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Yj.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Yj))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    lk = function (a) {
      var b = jk();
      bk(function () {
        kk(b, !1, a);
      });
    };
  function kk(a, b, c, d, e) {
    function f(x, y) {
      var w = mk(x, g);
      w && (Xi(w, y, h), (k = !0));
    }
    c = c || {};
    e = e || [];
    var g = hk(c.prefix);
    d = d || Ta();
    var h = fj(c, d, !0);
    h.lb = "ad_storage";
    var k = !1,
      n = Math.round(d / 1e3),
      p = function (x) {
        var y = ["GCL", n, x];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == Wj.enable_gbraid_cookie_write
        ? 0
        : Wj.enable_gbraid_cookie_write) &&
      !k &&
      a.gb
    ) {
      var q = a.gb[0],
        r = mk("gb", g),
        u = !1;
      if (!b)
        for (var t = ck(r), v = 0; v < t.length; v++)
          t[v].Ha === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var ok = function (a, b) {
      var c = Mj(!0);
      bk(function () {
        for (var d = hk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Zj[f]) {
            var g = mk(f, d),
              h = c[g];
            if (h) {
              var k = Math.min(nk(h), Ta()),
                n;
              b: {
                var p = k;
                if (Li(z))
                  for (
                    var q = Oi(g, J.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (nk(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = fj(b, k, !0);
                u.lb = "ad_storage";
                Xi(g, h, u);
              }
            }
          }
        }
        kk(ik(c.gclid, c.gclsrc), !1, b);
      });
    },
    mk = function (a, b) {
      var c = Zj[a];
      if (void 0 !== c) return b + c;
    },
    nk = function (a) {
      return 0 !== pk(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function ek(a) {
    var b = pk(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          Ha: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function pk(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Yj.test(a[2])
      ? []
      : a;
  }
  var qk = function (a, b, c, d, e) {
      if (Ea(b) && Li(z)) {
        var f = hk(e),
          g = function () {
            for (var h = {}, k = 0; k < a.length; ++k) {
              var n = mk(a[k], f);
              if (n) {
                var p = Oi(n, J.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        bk(function () {
          Sj(g, b, c, d);
        });
      }
    },
    gk = function (a) {
      return a.filter(function (b) {
        return Yj.test(b.Ha);
      });
    },
    rk = function (a, b) {
      if (Li(z)) {
        for (var c = hk(b.prefix), d = {}, e = 0; e < a.length; e++)
          Zj[a[e]] && (d[a[e]] = Zj[a[e]]);
        bk(function () {
          La(d, function (f, g) {
            var h = Oi(c + g, J.cookie, void 0, "ad_storage");
            h.sort(function (u, t) {
              return nk(t) - nk(u);
            });
            if (h.length) {
              var k = h[0],
                n = nk(k),
                p = 0 !== pk(k.split(".")).length ? k.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== pk(k.split(".")).length ? k.split(".")[2] : void 0;
              q[f] = [r];
              kk(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function sk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var tk = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (yg()) {
      var c = jk();
      if (sk(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        Tj(function () {
          return d;
        }, 3);
        Tj(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function uk(a, b) {
    var c = hk(b),
      d = mk(a, c);
    if (!d) return 0;
    for (var e = ck(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function vk(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Pk = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Qk = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Rk = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Sk =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var Tk = function () {
      var a = !1;
      a = !0;
      return a;
    },
    Vk = function (a) {
      var b = Mh("gtm.allowlist") || Mh("gtm.whitelist");
      b && jg(9);
      Tk() && (b = ["google", "gtagfl", "lcl", "zone"]);
      var c = b && Ya(Pa(b), Qk),
        d = Mh("gtm.blocklist") || Mh("gtm.blacklist");
      d || ((d = Mh("tagTypeBlacklist")) && jg(3));
      d ? jg(8) : (d = []);
      Uk() &&
        ((d = Pa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Pa(d).indexOf("google") && jg(2);
      var e = d && Ya(Pa(d), Rk),
        f = {};
      return function (g) {
        var h = g && g[Kd.Jb];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var k = yh[h] || [],
          n = a(h, k);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (k && 0 < k.length)
                  for (var q = 0; q < k.length; q++) {
                    if (0 > c.indexOf(k[q])) {
                      jg(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var u = 0 <= e.indexOf(h);
          if (u) r = u;
          else {
            var t = Ka(e, k || []);
            t && jg(10);
            r = t;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= k.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = Ka(e, Sk));
        return (f[h] = v);
      };
    },
    Uk = function () {
      return Pk.test(z.location && z.location.hostname);
    };
  var Ie = { J: "G-NZQ8B5H1RB", Gc: "" },
    Wk = { Ch: "G-NZQ8B5H1RB", Dh: "G-NZQ8B5H1RB" },
    Xk = function () {
      var a = [Ie.J];
      return a;
    },
    Yk = function () {
      var a = [Ie.J];
      return a;
    },
    Zk = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    al = function (a) {
      return $k().container.hasOwnProperty(a);
    };
  function $k() {
    var a = S.tidr;
    a || ((a = new Zk()), (S.tidr = a));
    return a;
  }
  var dl = function (a) {},
    hl = function (a) {},
    yl = function () {
      return (
        "&tc=" +
        je.filter(function (a) {
          return a;
        }).length
      );
    },
    Bl = function () {
      2022 <= zl().length && Al();
    },
    Cl = function (a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
    },
    El = function () {
      Dl || (Dl = z.setTimeout(Al, 500));
    },
    Al = function () {
      Dl && (z.clearTimeout(Dl), (Dl = void 0));
      if (void 0 !== Fl && (!Gl[Fl] || Hl || Il))
        if (Jl[Fl] || Kl.Nj() || 0 >= Ll--) jg(1), (Jl[Fl] = !0);
        else {
          Kl.mk();
          var a = zl(!0);
          Pb(a);
          Gl[Fl] = !0;
          Nl = Ml = Pl = Ql = Rl = Il = Hl = "";
          Ol = [];
        }
    },
    zl = function (a) {
      var b = Fl;
      if (void 0 === b) return "";
      var c = hg("GTM"),
        d = hg("TAGGING");
      return [
        Sl,
        Gl[b] ? "" : "&es=1",
        Tl[b],
        dl(b),
        c ? "&u=" + c : "",
        d ? "&ut=" + d : "",
        yl(),
        Hl,
        Il,
        Rl,
        Ql,
        hl(a),
        Pl,
        Ml,
        Nl ? "&dl=" + encodeURIComponent(Nl) : "",
        0 < Ol.length ? "&tdp=" + Ol.join(".") : "",
        "&z=0",
      ].join("");
    },
    Vl = function () {
      Sl = Ul();
    },
    Ul = function () {
      return [Wl, "&v=3&t=t", "&pid=" + Ha(), "&rv=" + nh.Zd].join("");
    },
    gl = ["L", "S", "Y"],
    cl = ["S", "E"],
    Xl = { sampleRate: "0.005000", Wh: "", Vh: Number("5") },
    Yl =
      0 <= J.location.search.indexOf("?gtm_latency=") ||
      0 <= J.location.search.indexOf("&gtm_latency="),
    Zl;
  if (!(Zl = Yl)) {
    var $l = Math.random(),
      am = Xl.sampleRate;
    Zl = $l < am;
  }
  var bm = Zl,
    Wl = "https://www.googletagmanager.com/a?id=" + Ie.J + "&cv=1",
    cm = {
      label: Ie.J + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    Sl = Ul(),
    Gl = {},
    Hl = "",
    Il = "",
    Pl = "",
    Ql = "",
    Ml = "",
    Ol = [],
    Nl = "",
    fl = {},
    el = !1,
    bl = {},
    dm = {},
    Rl = "",
    Fl = void 0,
    Tl = {},
    Jl = {},
    Dl = void 0,
    em = 5;
  0 < Xl.Vh && (em = Xl.Vh);
  var Kl = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Nj: function () {
          return c < a ? !1 : Ta() - d[c % a] < b;
        },
        mk: function () {
          var f = c++ % a;
          d[f] = Ta();
        },
      };
    })(em, 1e3),
    Ll = 1e3,
    gm = function (a, b) {
      if (bm && !Jl[a] && Fl !== a) {
        Al();
        Fl = a;
        Pl = Hl = "";
        Tl[a] = "&e=" + Cl(b) + "&eid=" + a;
        El();
      }
    },
    hm = function (a, b, c, d) {
      if (bm && b) {
        var e,
          f = String(b[Kd.Jb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!Jl[a]) {
          a !== Fl && (Al(), (Fl = a));
          Hl = Hl ? Hl + "." + g : "&tr=" + g;
          var h = b["function"];
          if (!h)
            throw Error("Error: No function name given for function call.");
          var k = (le[h] ? "1" : "2") + e;
          Pl = Pl ? Pl + "." + k : "&ti=" + k;
          El();
          Bl();
        }
      }
    };
  var om = function (a, b, c) {
      if (bm && !Jl[a]) {
        a !== Fl && (Al(), (Fl = a));
        var d = c + b;
        Il = Il ? Il + "." + d : "&epr=" + d;
        El();
        Bl();
      }
    },
    pm = function (a, b, c) {};
  var qm = { initialized: 11, complete: 12, interactive: 13 },
    rm = {},
    sm = Object.freeze(((rm[Q.Ib] = !0), (rm[Q.oc] = !0), rm)),
    tm = {},
    um = Object.freeze(((tm[Q.Fa] = !0), tm)),
    vm =
      0 <= J.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= J.location.search.indexOf("&gtm_diagnostics="),
    xm = function (a, b, c) {};
  function ym(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function wm(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var u = r[q];
        return void 0 === u ? um[q] : u;
      },
      f;
    for (f in ym(a, b))
      if (!sm[f]) {
        var g = (d ? d + "." : "") + f,
          h = e(f, a),
          k = e(f, b),
          n = "object" === lc(h) || "array" === lc(h),
          p = "object" === lc(k) || "array" === lc(k);
        if (n && p) wm(h, k, c, g);
        else if (n || p || h !== k) c[g] = !0;
      }
    return Object.keys(c);
  }
  var zm = !1,
    Am = 0,
    Bm = [];
  function Cm(a) {
    if (!zm) {
      var b = J.createEventObject,
        c = "complete" == J.readyState,
        d = "interactive" == J.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        zm = !0;
        for (var e = 0; e < Bm.length; e++) K(Bm[e]);
      }
      Bm.push = function () {
        for (var f = 0; f < arguments.length; f++) K(arguments[f]);
        return 0;
      };
    }
  }
  function Dm() {
    if (!zm && 140 > Am) {
      Am++;
      try {
        J.documentElement.doScroll("left"), Cm();
      } catch (a) {
        z.setTimeout(Dm, 50);
      }
    }
  }
  var Em = function (a) {
    zm ? a() : Bm.push(a);
  };
  var Fm = function () {
    this.I = 0;
    this.g = {};
  };
  Fm.prototype.o = function (a, b, c) {
    var d = ++this.I;
    this.g[a] = this.g[a] || {};
    this.g[a][String(d)] = { listener: b, Za: c };
    return d;
  };
  Fm.prototype.s = function (a, b) {
    var c = this.g[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  Fm.prototype.C = function (a, b) {
    var c = [];
    La(this.g[a], function (d, e) {
      0 > c.indexOf(e.listener) &&
        (void 0 === e.Za || 0 <= b.indexOf(e.Za)) &&
        c.push(e.listener);
    });
    return c;
  };
  var Gm = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Ie.J,
    };
  };
  var Im = function (a, b) {
      this.g = !1;
      this.C = [];
      this.I = { tags: [] };
      this.R = !1;
      this.o = this.s = 0;
      Hm(this, a, b);
    },
    Jm = function (a, b, c, d) {
      if (qh.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      nc(d) && (e = oc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.I.tags.push(e) - 1;
    },
    Km = function (a, b, c, d) {
      var e = a.I.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Lm = function (a) {
      if (!a.g) {
        for (var b = a.C, c = 0; c < b.length; c++) b[c]();
        a.g = !0;
        a.C.length = 0;
      }
    },
    Hm = function (a, b, c) {
      void 0 !== b && a.ce(b);
      c &&
        z.setTimeout(function () {
          return Lm(a);
        }, Number(c));
    };
  Im.prototype.ce = function (a) {
    var b = this,
      c = Va(function () {
        return K(function () {
          a(Ie.J, b.I);
        });
      });
    this.g ? c() : this.C.push(c);
  };
  var Mm = function (a) {
      a.s++;
      return Va(function () {
        a.o++;
        a.R && a.o >= a.s && Lm(a);
      });
    },
    Nm = function (a) {
      a.R = !0;
      a.o >= a.s && Lm(a);
    };
  var Om = function () {
      function a(d) {
        return !Da(d) || 0 > d ? 0 : d;
      }
      if (!S._li && z.performance && z.performance.timing) {
        var b = z.performance.timing.navigationStart,
          c = Da(Nh.get("gtm.start")) ? Nh.get("gtm.start") : 0;
        S._li = { cst: a(c - b), cbt: a(wh - b) };
      }
    },
    Pm = function (a) {
      z.performance && z.performance.mark(Ie.J + "_" + a + "_start");
    },
    Qm = function (a) {
      if (z.performance) {
        var b = Ie.J + "_" + a + "_start",
          c = Ie.J + "_" + a + "_duration";
        z.performance.measure(c, b);
        var d = z.performance.getEntriesByName(c)[0];
        z.performance.clearMarks(b);
        z.performance.clearMeasures(c);
        var e = S._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (S._p = e));
        return d.duration;
      }
    },
    Rm = function () {
      if (z.performance && z.performance.now) {
        var a = S._p || {};
        a.PAGEVIEW = z.performance.now();
        S._p = a;
      }
    };
  var Sm = {},
    Tm = function () {
      return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject];
    },
    Um = !1;
  function Xm() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var Ym = function (a) {},
    Zm = function (a, b) {
      return function () {
        var c = Tm(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              k = 0 > g.indexOf("&tid=" + b);
            k &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            k &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function dn(a, b, c, d) {
    var e = je[a],
      f = en(a, b, c, d);
    if (!f) return null;
    var g = te(e[Kd.Sg], c, []);
    if (g && g.length) {
      var h = g[0];
      f = dn(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.oh ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function en(a, b, c, d) {
    function e() {
      if (f[Kd.Qi]) h();
      else {
        var x = ue(f, c, []);
        var y = x[Kd.ai];
        if (null != y)
          for (var w = 0; w < y.length; w++)
            if (!Lg(y[w])) {
              h();
              return;
            }
        var A = Jm(c.xb, String(f[Kd.Jb]), Number(f[Kd.Ug]), x[Kd.Ri]),
          B = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var D = Ta() - C;
            hm(c.id, je[a], "5", D);
            Km(c.xb, A, "success", D);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var D = Ta() - C;
            hm(c.id, je[a], "6", D);
            Km(c.xb, A, "failure", D);
            h();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        hm(c.id, f, "1");
        var E = function () {
          var D = Ta() - C;
          hm(c.id, f, "7", D);
          Km(c.xb, A, "exception", D);
          B || ((B = !0), h());
        };
        var C = Ta();
        try {
          se(x, { event: c, index: a, type: 1 });
        } catch (D) {
          E(D);
        }
      }
    }
    var f = je[a],
      g = b.onSuccess,
      h = b.onFailure,
      k = b.terminate;
    if (c.If(f)) return null;
    var n = te(f[Kd.Vg], c, []);
    if (n && n.length) {
      var p = n[0],
        q = dn(p.index, { onSuccess: g, onFailure: h, terminate: k }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.oh ? k : q;
    }
    if (f[Kd.Mg] || f[Kd.Vi]) {
      var r = f[Kd.Mg] ? ke : c.Dk,
        u = g,
        t = h;
      if (!r[a]) {
        e = Va(e);
        var v = fn(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](u, t);
      };
    }
    return e;
  }
  function fn(a, b, c) {
    var d = [],
      e = [];
    b[a] = gn(d, e, c);
    return {
      onSuccess: function () {
        b[a] = hn;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = jn;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function gn(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function hn(a) {
    a();
  }
  function jn(a, b) {
    b();
  }
  function kn(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return ki("" + c + b).href;
    }
  }
  function ln(a, b) {
    return mn() ? kn(a, b) : void 0;
  }
  function mn() {
    var a = !1;
    return a;
  }
  function nn() {
    return !!nh.$d && "SGTM_TOKEN" !== nh.$d.replaceAll("@@", "");
  }
  var on = function () {
    var a = !1;
    return a;
  };
  var qn = function (a, b, c, d) {
      return (2 === pn() || d || "http:" != z.location.protocol ? a : b) + c;
    },
    pn = function () {
      var a = Nb(),
        b;
      if (1 === a)
        a: {
          var c = sh;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = J.getElementsByTagName("script"),
              h = 0;
            h < g.length && 100 > h;
            h++
          ) {
            var k = g[h].src;
            if (k) {
              k = k.toLowerCase();
              if (0 === k.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === k.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var rn = !1;
  var tn = function (a, b, c) {
      if (!sn() && !al(a)) {
        var d = c ? "/gtag/js" : "/gtm.js",
          e = "?id=" + encodeURIComponent(a) + "&l=" + nh.ca,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        var g = nn();
        g && (e += "&sign=" + nh.$d);
        var h = ln(b, d + e);
        if (!h) {
          var k = nh.Hc + d;
          g &&
            Gb &&
            f &&
            (k = Gb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          h = qn("https://", "http://", k + e);
        }
        $k().container[a] = !0;
        Mb(h);
      }
    },
    un = function (a, b) {
      if (rn) {
        var c;
        if ((c = !sn())) c = !$k().destination.hasOwnProperty(a);
        if (c) {
          var d =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            nh.ca +
            "&cx=c";
          nn() && (d += "&sign=" + nh.$d);
          var e = ln(b, d);
          e || (e = qn("https://", "http://", nh.Hc + d));
          $k().destination[a] = !0;
          Mb(e);
        }
      } else tn(a, b, !0);
    };
  function sn() {
    if (on()) {
      return !0;
    }
    return !1;
  }
  var vn = [];
  vn[1] = !0;
  var wn = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.dataLayerConfig = {};
      this.remoteConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.priorityId = this.eventId = void 0;
      this.isGtmEvent = !1;
    },
    xn = function (a) {
      var b = new wn();
      b.eventModel = a;
      return b;
    },
    yn = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    zn = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    An = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    Bn = function (a, b) {
      a.dataLayerConfig = b;
      return a;
    },
    Cn = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    Dn = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    En = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    Fn = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    Gn = function (a, b) {
      a.onFailure = b;
      return a;
    };
  l = wn.prototype;
  l.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    Hn(this, this.globalConfig[a], this.dataLayerConfig[a]) && jg(71);
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  l.getTopLevelKeys = function () {
    function a(f) {
      for (var g = Object.keys(f), h = 0; h < g.length; ++h) b[g[h]] = 1;
    }
    var b = {};
    a(this.eventModel);
    a(this.targetConfig);
    a(this.containerConfig);
    a(this.globalConfig);
    for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
      var e = c[d];
      if (
        "event" !== e &&
        "gtm" !== e &&
        "tagTypeBlacklist" !== e &&
        !b.hasOwnProperty(e)
      ) {
        jg(71);
        break;
      }
    }
    return Object.keys(b);
  };
  l.getMergedValues = function (a, b) {
    function c(h) {
      nc(h) &&
        La(h, function (k, n) {
          e = !0;
          d[k] = n;
        });
    }
    var d = {},
      e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.globalConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    var f = e,
      g = d;
    d = {};
    e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.dataLayerConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    (e !== f || Hn(this, d, g)) && jg(71);
    e = f;
    d = g;
    return e ? d : void 0;
  };
  l.getKeysFromFirstOfAnyScope = function (a) {
    var b = {},
      c = !1,
      d = function (g) {
        for (var h = 0; h < a.length; h++)
          void 0 !== g[a[h]] && ((b[a[h]] = g[a[h]]), (c = !0));
        return c;
      };
    if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig))
      return b;
    d(this.globalConfig);
    var e = b,
      f = c;
    b = {};
    c = !1;
    d(this.dataLayerConfig);
    Hn(this, b, e) && jg(71);
    b = e;
    c = f;
    if (c) return b;
    d(this.remoteConfig);
    return b;
  };
  l.getEventModelKeys = function () {
    var a = [],
      b;
    for (b in this.eventModel)
      b !== Q.Ib &&
        this.eventModel.hasOwnProperty(b) &&
        void 0 !== this.eventModel[b] &&
        a.push(b);
    return a;
  };
  var Hn = function (a, b, c) {
    try {
      if (b === c) return !1;
      var d = lc(b);
      if (d !== lc(c) || !((nc(b) && nc(c)) || "array" === d)) return !0;
      if ("array" === d) {
        if (b.length !== c.length) return !0;
        for (var e = 0; e < b.length; e++) if (Hn(a, b[e], c[e])) return !0;
      } else {
        for (var f in c) if (!b.hasOwnProperty(f)) return !0;
        for (var g in b)
          if (!c.hasOwnProperty(g) || Hn(a, b[g], c[g])) return !0;
      }
    } catch (h) {
      jg(72);
    }
    return !1;
  };
  var In = function () {
    S.dedupe_gclid || (S.dedupe_gclid = "" + aj());
    return S.dedupe_gclid;
  };
  var Jn;
  if (3 === nh.Zd.length) Jn = "g";
  else {
    var Kn = "G";
    Kn = "g";
    Jn = Kn;
  }
  var Ln = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: Jn,
      OPT: "o",
    },
    Mn = function (a) {
      var b = Ie.J.split("-"),
        c = b[0].toUpperCase(),
        d = Ln[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === nh.Zd.length) {
        var g = "w";
        g = on() ? "s" : "o";
        f = "2" + g;
      } else f = "";
      return f + d + nh.Zd + e;
    };
  function Nn(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var On = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function Pn() {
    return ub("iPhone") && !ub("iPod") && !ub("iPad");
  }
  ub("Opera");
  ub("Trident") || ub("MSIE");
  ub("Edge");
  !ub("Gecko") ||
    (-1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge")) ||
    ub("Trident") ||
    ub("MSIE") ||
    ub("Edge");
  -1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge") && ub("Mobile");
  ub("Macintosh");
  ub("Windows");
  ub("Linux") || ub("CrOS");
  var Qn = ma.navigator || null;
  Qn && (Qn.appVersion || "").indexOf("X11");
  ub("Android");
  Pn();
  ub("iPad");
  ub("iPod");
  Pn() || ub("iPad") || ub("iPod");
  tb().toLowerCase().indexOf("kaios");
  var Rn = function (a) {
    if (!a || !J.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    J.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  };
  var Sn = function () {};
  var Tn = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Un = function (a, b) {
      this.o = a;
      this.g = null;
      this.C = {};
      this.R = 0;
      this.I = void 0 === b ? 500 : b;
      this.s = null;
    };
  la(Un, Sn);
  Un.prototype.addEventListener = function (a) {
    var b = {},
      c = Ki(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.I &&
      (d = setTimeout(function () {
        b.tcString = "tcunavailable";
        b.internalErrorState = 1;
        c();
      }, this.I));
    var e = function (f, g) {
      clearTimeout(d);
      f
        ? ((b = f),
          (b.internalErrorState = Tn(b)),
          (g && 0 === b.internalErrorState) ||
            ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
        : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
      a(b);
    };
    try {
      Vn(this, "addEventListener", e);
    } catch (f) {
      (b.tcString = "tcunavailable"),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  Un.prototype.removeEventListener = function (a) {
    a && a.listenerId && Vn(this, "removeEventListener", null, a.listenerId);
  };
  var Xn = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var k;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Wn(a.vendor.consents, void 0 === d ? "755" : d);
          k =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Wn(a.purpose.consents, b);
        } else k = !0;
      else
        k =
          1 === h
            ? a.purpose && a.vendor
              ? Wn(a.purpose.legitimateInterests, b) &&
                Wn(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return k;
    },
    Wn = function (a, b) {
      return !(!a || !a[b]);
    },
    Vn = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.o.__tcfapi) {
        var e = a.o.__tcfapi;
        e(b, 2, c, d);
      } else if (Yn(a)) {
        Zn(a);
        var f = ++a.R;
        a.C[f] = c;
        if (a.g) {
          var g = {};
          a.g.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Yn = function (a) {
      if (a.g) return a.g;
      var b;
      a: {
        for (var c = a.o, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.g = b;
      return a.g;
    },
    Zn = function (a) {
      a.s ||
        ((a.s = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.C[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        On(a.o, a.s));
    };
  var $n = !0;
  $n = !1;
  var ao = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    bo = Nn("", 550),
    co = Nn("", 500);
  function eo() {
    var a = S.tcf || {};
    return (S.tcf = a);
  }
  var jo = function () {
    var a = eo(),
      b = new Un(z, $n ? 3e3 : -1);
    if (
      !0 === z.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof z.__tcfapi ||
        "function" === typeof b.o.__tcfapi ||
        null != Yn(b))
    ) {
      a.active = !0;
      a.ud = {};
      fo();
      var c = null;
      $n
        ? (c = z.setTimeout(function () {
            go(a);
            ho(a);
            c = null;
          }, co))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) go(a), ho(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = io()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in ao)
                if (ao.hasOwnProperty(g))
                  if ("1" === g) {
                    var h = d,
                      k = !0;
                    k = void 0 === k ? !1 : k;
                    var n;
                    var p = h;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState &&
                          (p.internalErrorState = Tn(p)),
                        (n =
                          "error" === p.cmpStatus ||
                          0 !== p.internalErrorState ||
                          ("loaded" === p.cmpStatus &&
                            ("tcloaded" === p.eventStatus ||
                              "useractioncomplete" === p.eventStatus))
                            ? !0
                            : !1));
                    f["1"] = n
                      ? !1 === h.gdprApplies ||
                        "tcunavailable" === h.tcString ||
                        (void 0 === h.gdprApplies && !k) ||
                        "string" !== typeof h.tcString ||
                        !h.tcString.length
                        ? !0
                        : Xn(h, "1", 0)
                      : !1;
                  } else f[g] = Xn(d, g, ao[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.ud = e), ho(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), go(a), ho(a);
      }
    }
  };
  function go(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    $n && (a.ud = io());
  }
  function fo() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = bo), a);
    Ig(b);
  }
  function io() {
    var a = {},
      b;
    for (b in ao) ao.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function ho(a) {
    var b = {},
      c = ((b.ad_storage = a.ud["1"] ? "granted" : "denied"), b);
    Kg(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: ko() }
    );
  }
  var ko = function () {
      var a = eo();
      return a.active ? a.tcString || "" : "";
    },
    lo = function () {
      var a = eo();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    mo = function (a) {
      if (!ao.hasOwnProperty(String(a))) return !0;
      var b = eo();
      return b.active && b.ud ? !!b.ud[String(a)] : !0;
    };
  var to = !1;
  var uo = function () {
      this.g = {};
    },
    vo = function (a, b, c) {
      null != c && (a.g[b] = c);
    },
    wo = function (a) {
      return Object.keys(a.g)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b]);
        })
        .join("&");
    },
    yo = function (a, b, c, d, e) {};
  var Ao = /[A-Z]+/,
    Bo = /\s/,
    Co = function (a) {
      if (m(a)) {
        a = Ra(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Ao.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (Bo.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], P: d };
          }
        }
      }
    },
    Eo = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = Co(a[c]);
        d && (b[d.id] = d);
      }
      Do(b);
      var e = [];
      La(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function Do(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.P[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Xo = !1;
  function Yo() {
    if (Ca(Fb.joinAdInterestGroup)) return !0;
    Xo || (Rn(""), (Xo = !0));
    return Ca(Fb.joinAdInterestGroup);
  }
  function Zo(a, b) {
    var c = void 0;
    try {
      c = J.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ta() - d) {
        gg("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          J.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          gg("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Ob(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ta() },
      c
    );
  }
  var Ip = function (a, b, c) {
      this.xa = a;
      this.eventName = b;
      this.D = c;
      this.F = {};
      this.metadata = {};
      this.Ia = !1;
    },
    Jp = function (a, b, c) {
      var d = a.D.getWithConfig(b);
      void 0 !== d ? (a.F[b] = d) : void 0 !== c && (a.F[b] = c);
    },
    Kp = function (a, b, c) {
      var d = Vh(a.xa);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Lp(a) {
    return {
      getDestinationId: function () {
        return a.xa;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.F[b];
      },
      setHitData: function (b, c) {
        return void (a.F[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.F[b] && (a.F[b] = c);
      },
      copyToHitData: function (b, c) {
        Jp(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.Ia = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
    };
  }
  var Np = function (a) {
      var b = Mp[a.xa];
      if (!a.Ia && b)
        for (var c = Lp(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.Ia = !0;
          }
          if (a.Ia) break;
        }
    },
    Op = function (a, b) {
      var c = Mp[a];
      c || (c = Mp[a] = []);
      c.push(b);
    },
    Mp = {};
  var bq = function () {
      var a = !0;
      (mo(7) && mo(9) && mo(10)) || (a = !1);
      return a;
    },
    cq = function () {
      var a = !0;
      (mo(3) && mo(4)) || (a = !1);
      return a;
    };
  var Wq = null,
    Xq = !1;
  function Yq(a) {
    return Xq && !a ? (Wq = Wq || new Zq()) : (S.gcq = S.gcq || new Zq());
  }
  var $q = function (a, b, c) {
      Yq().register(a, b, c);
    },
    ar = function (a, b, c, d) {
      Yq().push("event", [b, a], c, d);
    },
    br = function (a, b, c) {
      Yq().insert("event", [b, a], c);
    },
    cr = function (a, b) {
      Yq().push("config", [a], b);
    },
    dr = function (a, b, c, d) {
      Yq().push("get", [a, b], c, d);
    },
    er = function (a) {
      return Yq().getRemoteConfig(a);
    },
    fr = function () {
      var a = Q.ba;
      return Yq().getGlobalConfigValue && Yq().getGlobalConfigValue(a);
    },
    gr = {},
    hr = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.o = {};
      this.s = null;
      this.claimed = this.g = !1;
    },
    ir = function (a, b, c, d, e) {
      this.type = a;
      this.s = b;
      this.X = c || "";
      this.g = d;
      this.o = e;
    },
    Zq = function () {
      this.o = {};
      this.s = {};
      this.g = [];
      this.C = { AW: !1, UA: !1 };
    },
    jr = function (a, b) {
      var c = Co(b);
      return (a.o[c.containerId] = a.o[c.containerId] || new hr());
    },
    kr = function (a, b, c, d) {
      if (b) {
        var e = Co(b);
        if (e && 1 === jr(a, b).status) {
          jr(a, b).status = 2;
          var f = {};
          bm &&
            (f.timeoutId = z.setTimeout(function () {
              jg(38);
              El();
            }, 3e3));
          a.push("require", [f], e.containerId);
          gr[e.containerId] = Ta();
          if (on()) {
          } else 2 === d ? un(e.containerId, c) : tn(e.containerId, c, !0);
        }
      }
    },
    lr = function (a, b, c, d) {
      if (d.X) {
        var e = jr(a, d.X),
          f = e.s;
        if (f) {
          var g = oc(c),
            h = oc(e.targetConfig[d.X]),
            k = oc(e.containerConfig),
            n = oc(e.remoteConfig),
            p = oc(a.s),
            q = {};
          try {
            q = oc(Jh);
          } catch (x) {
            jg(72);
          }
          var r = Mh("gtm.uniqueEventId"),
            u = Co(d.X).prefix,
            t = Va(function () {
              var x = g[Q.fc];
              x && K(x);
            }),
            v = Fn(
              En(
                Gn(
                  Dn(Bn(An(Cn(zn(yn(xn(g), h), k), n), p), q), function () {
                    om(r, u, "2");
                    t();
                  }),
                  function () {
                    om(r, u, "3");
                    t();
                  }
                ),
                function (x, y) {
                  a.C[x] = y;
                }
              ),
              function (x) {
                return a.C[x];
              }
            );
          try {
            om(r, u, "1"), xm(d.type, d.X, v);
            f(d.X, b, d.s, v);
          } catch (x) {
            om(r, u, "4");
          }
        }
      }
    };
  l = Zq.prototype;
  l.register = function (a, b, c) {
    var d = jr(this, a);
    if (3 !== d.status) {
      d.s = b;
      d.status = 3;
      c && (oc(d.remoteConfig, c), (d.remoteConfig = c));
      var e = Co(a),
        f = gr[e.containerId];
      if (void 0 !== f) {
        var g = S[e.containerId].bootstrap,
          h = e.prefix.toUpperCase();
        S[e.containerId]._spx && (h = h.toLowerCase());
        var k = Mh("gtm.uniqueEventId"),
          n = h,
          p = Ta() - g;
        if (bm && !Jl[k]) {
          k !== Fl && (Al(), (Fl = k));
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          Ql = Ql ? Ql + "," + q : "&cl=" + q;
        }
        delete gr[e.containerId];
      }
      this.flush();
    }
  };
  l.notifyContainerLoaded = function (a, b) {
    var c = this,
      d = function (f) {
        if (Co(f)) {
          var g = jr(c, f);
          g.status = 3;
          g.claimed = !0;
        }
      };
    d(a);
    for (var e = 0; e < b.length; e++) d(b[e]);
    this.flush();
  };
  l.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!Co(c)) return;
      kr(this, c, b[0][Q.ba] || this.s[Q.ba], "event" === a ? 2 : 1);
      jr(this, c).g && (d = !1);
    }
    this.g.push(new ir(a, Math.floor(Ta() / 1e3), c, b, d));
    d || this.flush();
  };
  l.insert = function (a, b, c) {
    var d = Math.floor(Ta() / 1e3);
    0 < this.g.length
      ? this.g.splice(1, 0, new ir(a, d, c, b, !1))
      : this.g.push(new ir(a, d, c, b, !1));
  };
  l.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.g.length; ) {
      var f = this.g[0];
      if (f.o)
        !f.X || jr(this, f.X).g ? ((f.o = !1), this.g.push(f)) : c.push(f),
          this.g.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = jr(this, f.X);
            if (3 !== g.status && !a) {
              this.g.push.apply(this.g, c);
              return;
            }
            bm && z.clearTimeout(f.g[0].timeoutId);
            break;
          case "set":
            La(f.g[0], function (r, u) {
              oc($a(r, u), b.s);
            });
            break;
          case "config":
            g = jr(this, f.X);
            if (g.claimed) break;
            e.ab = {};
            La(
              f.g[0],
              (function (r) {
                return function (u, t) {
                  oc($a(u, t), r.ab);
                };
              })(e)
            );
            var h = !!e.ab[Q.Sd];
            delete e.ab[Q.Sd];
            var k = Co(f.X),
              n = k.containerId === k.id;
            h || (n ? (g.containerConfig = {}) : (g.targetConfig[f.X] = {}));
            (g.g && h) || lr(this, Q.La, e.ab, f);
            g.g = !0;
            delete e.ab[Q.Ib];
            n
              ? oc(e.ab, g.containerConfig)
              : (oc(e.ab, g.targetConfig[f.X]), jg(70));
            d = !0;
            break;
          case "event":
            g = jr(this, f.X);
            if (g.claimed) break;
            e.Bd = {};
            La(
              f.g[0],
              (function (r) {
                return function (u, t) {
                  oc($a(u, t), r.Bd);
                };
              })(e)
            );
            lr(this, f.g[1], e.Bd, f);
            break;
          case "get":
            if (((g = jr(this, f.X)), !g.claimed)) {
              var p = {},
                q = ((p[Q.fb] = f.g[0]), (p[Q.rb] = f.g[1]), p);
              lr(this, Q.Sa, q, f);
            }
        }
        this.g.shift();
        mr(this, f);
      }
      e = { ab: e.ab, Bd: e.Bd };
    }
    this.g.push.apply(this.g, c);
    d && this.flush();
  };
  var mr = function (a, b) {
    if ("require" !== b.type)
      if (b.X)
        for (
          var c = a.getCommandListeners(b.X)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.o)
          if (a.o.hasOwnProperty(e)) {
            var f = a.o[e];
            if (f && f.o)
              for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]();
          }
  };
  Zq.prototype.getRemoteConfig = function (a) {
    return jr(this, a).remoteConfig;
  };
  Zq.prototype.getCommandListeners = function (a) {
    return jr(this, a).o;
  };
  Zq.prototype.getGlobalConfigValue = function (a) {
    return this.s[a];
  };
  var nr = [Q.Bb, Q.kc, Q.Vd],
    pr = function (a, b) {
      return 1 === arguments.length ? or("set", a) : or("set", a, b);
    },
    qr = function (a, b) {
      return 1 === arguments.length ? or("config", a) : or("config", a, b);
    },
    rr = function (a, b, c) {
      c = c || {};
      c[Q.Gb] = a;
      if ("G" === a.split("-")[0])
        for (var d in c) "_" === d[0] && -1 === nr.indexOf(d) && delete c[d];
      return or("event", b, c);
    };
  function or(a) {
    return arguments;
  }
  var tr = function (a) {
    if (sr(a)) return a;
    this.g = a;
  };
  tr.prototype.getUntrustedMessageValue = function () {
    return this.g;
  };
  var sr = function (a) {
      return !a || "object" !== lc(a) || nc(a)
        ? !1
        : "getUntrustedMessageValue" in a;
    },
    ur = function (a) {
      if (sr(a)) return a.getUntrustedMessageValue();
    };
  tr.prototype.getUntrustedMessageValue = tr.prototype.getUntrustedMessageValue;
  var vr = function () {
    this.g = [];
    this.o = [];
  };
  vr.prototype.push = function (a, b, c) {
    var d = this.g.length + 1;
    sr(a) && (a = ur(a) || a);
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    a = new tr(a);
    var e = { debugContext: c, message: a, notBeforeEventId: b, priorityId: d };
    this.g.push(e);
    for (var f = 0; f < this.o.length; f++)
      try {
        this.o[f](e);
      } catch (g) {}
  };
  vr.prototype.listen = function (a) {
    this.o.push(a);
  };
  vr.prototype.get = function () {
    for (var a = {}, b = 0; b < this.g.length; b++) {
      var c = this.g[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  var xr = function (a, b, c) {
      wr().push(a, b, c);
    },
    zr = function () {
      var a = yr;
      wr().listen(a);
    },
    Ar = function (a, b) {
      return (
        a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
      );
    };
  function wr() {
    var a = S.mb;
    a || ((a = new vr()), (S.mb = a));
    return a;
  }
  var Br = !1;
  var Cr = !1;
  var Dr = function (a, b) {
    S.addDestinationToContainer
      ? S.addDestinationToContainer(a, b)
      : ((S.pendingDestinationIds = S.pendingDestinationIds || []),
        S.pendingDestinationIds.push([a, b]));
  };
  var Er = {},
    Fr = {},
    Gr = {},
    Hr = function (a, b) {
      var c = Fr[b] || [];
      c.push(a);
      Fr[b] = c;
    },
    Jr = function () {
      S.addTargetToGroup = function (e) {
        Ir(e, "default");
      };
      S.addDestinationToContainer = function (e, f) {
        Hr(e, f);
      };
      var a = S.pendingDefaultTargets;
      delete S.pendingDefaultTargets;
      if (Array.isArray(a))
        for (var b = 0; b < a.length; ++b) Ir(a[b], "default");
      var c = S.pendingDestinationIds;
      delete S.pendingDestinationIds;
      if (Array.isArray(c))
        for (var d = 0; d < c.length; ++d) Hr(c[d][0], c[d][1]);
    },
    Ir = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = Er[b[c]] || [];
        Er[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    Kr = function (a, b) {
      b = String(b).split(",");
      for (var c = 0; c < b.length; c++) {
        var d = Gr[b[c]] || [];
        Gr[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    Lr = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { Fc: d.Fc, Dd: d.Dd }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          if (Cr) {
            if (((d.Fc = Co(f)), d.Fc))
              if (Br) {
                var g = Yk();
                Ga(
                  g,
                  (function (t) {
                    return function (v) {
                      return t.Fc.containerId === v;
                    };
                  })(d)
                )
                  ? b.push(f)
                  : c.push(f);
              } else d.Fc.containerId === Ie.J || on() ? b.push(f) : c.push(f);
          } else b.push(f);
        else {
          var h = Er[f] || [];
          if (Cr)
            if (Br) {
              d.Dd = {};
              h.forEach(
                (function (t) {
                  return function (v) {
                    return (t.Dd[v] = !0);
                  };
                })(d)
              );
              for (var k = Xk(), n = 0; n < k.length; n++)
                if (d.Dd[k[n]]) {
                  var p = Yk();
                  p && p.length && (b = b.concat(p));
                  break;
                }
              var q = Gr[f] || [];
              q.length && (b = b.concat(q));
            } else
              for (var r = 0; r < h.length; r++) {
                var u = Co(h[r]);
                ((u && u.containerId === Ie.J) || on()) && b.push(u.id);
              }
          else h && h.length && (b = b.concat(h));
        }
      }
      return { Vj: b, Yj: c };
    },
    Mr = function (a) {
      La(Er, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Nr = function (a) {
      La(Gr, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Vr = function (a) {
      var b = S.zones;
      return b
        ? b.getIsAllowedFn(Xk(), a)
        : function () {
            return !0;
          };
    },
    Wr = function (a) {
      var b = S.zones;
      return b ? b.isActive(Xk(), a) : !0;
    };
  var Zr = function (a, b) {
    for (var c = [], d = 0; d < je.length; d++)
      if (a[d]) {
        var e = je[d];
        var f = Mm(b.xb);
        try {
          var g = dn(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = c,
              k = h.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = le[p];
            k.call(h, {
              Oh: n,
              Fh: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else Xr(d, b), f();
        } catch (u) {
          f();
        }
      }
    c.sort(Yr);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  var as = function (a, b) {
    if (!$r) return !1;
    var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
      d = $r.C(a.event, c ? String(c).split(",") : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = Mm(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  };
  function Yr(a, b) {
    var c,
      d = b.Fh,
      e = a.Fh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Oh,
        h = b.Oh;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function Xr(a, b) {
    if (!bm) return;
    var c = function (d) {
      var e = b.If(je[d]) ? "3" : "4",
        f = te(je[d][Kd.Sg], b, []);
      f && f.length && c(f[0].index);
      hm(b.id, je[d], e);
      var g = te(je[d][Kd.Vg], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var bs = !1,
    $r;
  var cs = function () {
    $r || ($r = new Fm());
    return $r;
  };
  var hs = function (a) {
    var b = Ta(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (bs) return !1;
      bs = !0;
    }
    var h,
      k = !1;
    if (Wr(c)) h = Vr(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      k = !0;
      h = Vr(Number.MAX_SAFE_INTEGER);
    }
    gm(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var r = {
        id: c,
        priorityId: d,
        name: e,
        If: Vk(h),
        Dk: [],
        zh: function () {
          jg(6);
        },
        fh: ds(),
        gh: es(c),
        xb: new Im(q, p),
      },
      u = De(r);
    k && (u = fs(u));
    var t = Zr(u, r),
      v = !1;
    v = as(a, r.xb);
    Nm(r.xb);
    ("gtm.js" !== e && "gtm.sync" !== e) || Ym(Ie.J);
    return gs(u, t) || v;
  };
  function es(a) {
    return function (b) {
      bm && (sc(b) || pm(a, "input", b));
    };
  }
  function ds() {
    var a = {};
    a.event = Rh("event", 1);
    a.ecommerce = Rh("ecommerce", 1);
    a.gtm = Rh("gtm");
    a.eventModel = Rh("eventModel");
    return a;
  }
  function fs(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] &&
        (ph[String(je[c][Kd.Jb])] && (b[c] = !0),
        void 0 !== je[c][Kd.Wi] && (b[c] = !0));
    return b;
  }
  function gs(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && je[c] && !qh[String(je[c][Kd.Jb])]) return !0;
    return !1;
  }
  var Me;
  var is = !1;
  var js = "HA GF G UA AW DC".split(" "),
    ks = !1,
    ls = !1,
    ms = 0;
  function ns(a) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Gh() });
    return a["gtm.uniqueEventId"];
  }
  function os(a) {
    delete a[Q.Vd];
    delete a[Q.Bb];
  }
  function ps() {
    if (Xq) return !1;
    ks || S.gtagRegistered || ((ks = S.gtagRegistered = !0), Jr());
    return ks;
  }
  var qs = {
      config: function (a) {
        ns(a);
        if (2 > a.length || !m(a[1])) return;
        var b = {};
        if (2 < a.length) {
          if ((void 0 != a[2] && !nc(a[2])) || 3 < a.length) return;
          b = a[2];
        }
        var c = Co(a[1]);
        if (!c) return;
        var d = c.id !== c.containerId;
        if (Xq) {
          var e = b[Q.ba] || fr();
          if (is && d) {
            if (
              !Ga(Yk(), function (p) {
                return p === c.containerId;
              })
            ) {
              un(c.containerId, e);
              return;
            }
          } else if (-1 === Xk().indexOf(c.containerId) && !on()) {
            tn(c.containerId, e, !0);
            return;
          }
        }
        var f = ps() || Xq;
        b[Q.nf]
          ? delete b[Q.nf]
          : is && d
          ? (Nr(c.id), Kr(c.id, b[Q.Nd] || "default"))
          : (Mr(c.id), Ir(c.id, b[Q.Nd] || "default"));
        delete b[Q.Nd];
        ls || jg(43);
        if (f) {
          var g = [c.id];
          is && !d && (g = Yk());
          for (var h = !1, k = 0; k < g.length; k++) {
            var n = Co(g[k]);
            n &&
              -1 !== js.indexOf(n.prefix) &&
              ("G" === n.prefix && (b[Q.Ib] = !0),
              delete b[Q.fc],
              n.id === n.containerId && (S.configCount = ++ms),
              cr(b, n.id),
              (h = !0));
          }
          if (h) return;
        }
        Ph("gtag.targets." + c.id);
        Ph("gtag.targets." + c.id, oc(b));
      },
      consent: function (a) {
        if (3 === a.length) {
          jg(39);
          var b = { eventId: ns(a), priorityId: a["gtm.priorityId"] },
            c = a[1];
          "default" === c ? Ig(a[2]) : "update" === c && Kg(a[2], b);
        }
      },
      event: function (a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = a[1];
        if (!(2 > a.length) && m(d)) {
          var e;
          if (2 < a.length) {
            if ((!nc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            e = a[2];
          }
          var f = e,
            g = {},
            h = ((g.event = d), g);
          f &&
            ((h.eventModel = oc(f)),
            f[Q.fc] && (h.eventCallback = f[Q.fc]),
            f[Q.Kd] && (h.eventTimeout = f[Q.Kd]));
          var k = !1,
            n = !1;
          if (e) {
            e[Q.Vd] && 0 === Ie.J.indexOf("GTM") && (k = !0);
            e[Q.Bb] && (n = !0);
            os(h.eventModel);
          }
          var p = ns(a),
            q = a["gtm.priorityId"];
          h["gtm.uniqueEventId"] = p;
          q && (h["gtm.priorityId"] = q);
          if ("optimize.callback" === d)
            return (h.eventModel = h.eventModel || {}), h;
          var r;
          var u = e,
            t = u && u[Q.Gb];
          void 0 === t && ((t = Mh(Q.Gb, 2)), void 0 === t && (t = "default"));
          if (m(t) || Ea(t)) {
            var v = t.toString().replace(/\s+/g, "").split(","),
              x = Lr(v),
              y = x.Vj,
              w = x.Yj;
            if (w.length)
              for (var A = (u && u[Q.ba]) || fr(), B = 0; B < w.length; B++) {
                var E = Co(w[B]);
                E && (is ? un(E.containerId, A) : tn(E.containerId, A, !0));
              }
            r = Eo(y);
          } else r = void 0;
          var C = r;
          if (!C) return;
          for (var D = ps() || Xq, F = [], P = 0; D && P < C.length; P++) {
            var H = C[P];
            if (-1 !== js.indexOf(H.prefix)) {
              var L = oc(e);
              os(L);
              "G" !== H.prefix || c || (L[Q.Ib] = !0);
              delete L[Q.fc];
              ar(d, L, H.id, n);
            }
            F.push(H.id);
          }
          h.eventModel = h.eventModel || {};
          0 < C.length
            ? (h.eventModel[Q.Gb] = F.join())
            : delete h.eventModel[Q.Gb];
          ls || jg(43);
          return k ? void 0 : h;
        }
      },
      get: function (a) {
        jg(53);
        if (4 !== a.length || !m(a[1]) || !m(a[2]) || !Ca(a[3])) return;
        var b = Co(a[1]),
          c = String(a[2]),
          d = a[3];
        if (!b) return;
        ls || jg(43);
        if (Xq) {
          var e = fr();
          if (is) {
            if (
              !Ga(Yk(), function (h) {
                return b.containerId === h;
              })
            ) {
              un(b.containerId, e);
              return;
            }
          } else if (b.containerId !== Ie.J && !on()) {
            tn(b.containerId, e, !0);
            return;
          }
        } else if (!ps()) return;
        if (-1 === js.indexOf(b.prefix)) return;
        ns(a);
        var f = {};
        Eg(oc(((f[Q.fb] = c), (f[Q.rb] = d), f)));
        var g = !1;
        g = !!a[Q.Bb];
        dr(
          c,
          function (h) {
            K(function () {
              return d(h);
            });
          },
          b.id,
          g
        );
      },
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          ls = !0;
          ps();
          var b = {};
          return (
            (b.event = "gtm.js"),
            (b["gtm.start"] = a[1].getTime()),
            (b["gtm.uniqueEventId"] = ns(a)),
            b
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && m(a[1]) && Ca(a[2])) {
          var b = a[1],
            c = a[2],
            d = Me.o;
          d.g[b] ? d.g[b].push(c) : (d.g[b] = [c]);
          if ((jg(74), "all" === a[1])) {
            jg(75);
            var e = !1;
            try {
              e = a[2](Ie.J, "unknown", {});
            } catch (f) {}
            e || jg(76);
          }
        } else {
          jg(73);
        }
      },
      set: function (a) {
        var b;
        2 == a.length && nc(a[1])
          ? (b = oc(a[1]))
          : 3 == a.length &&
            m(a[1]) &&
            ((b = {}),
            nc(a[2]) || Ea(a[2]) ? (b[a[1]] = oc(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          var c = ns(a),
            d = a["gtm.priorityId"];
          oc(b);
          if (ps() || Xq) {
            var e = oc(b);
            Yq().push("set", [e]);
          }
          b["gtm.uniqueEventId"] = c;
          d && (b["gtm.priorityId"] = d);
          b._clear = !0;
          return b;
        }
      },
    },
    rs = { policy: !0 };
  var ss = function (a) {
      var b = z[nh.ca].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    ts = function (a) {
      var b = z[nh.ca],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var us = !1,
    vs = [];
  function ws() {
    if (!us) {
      us = !0;
      for (var a = 0; a < vs.length; a++) K(vs[a]);
    }
  }
  var xs = function (a) {
    us ? K(a) : vs.push(a);
  };
  var Ns = 0,
    Os = {},
    Ps = [],
    Qs = [],
    Rs = !1,
    Ss = !1,
    Ts = function (a) {
      return z[nh.ca].push(a);
    },
    Us = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Ts(a);
    },
    Vs = function (a, b) {
      var c = S[nh.ca],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = z.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (z.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Ws(a) {
    var b = a._clear;
    La(a, function (d, e) {
      "_clear" !== d && (b && Ph(d), Ph(d, e));
    });
    vh || (vh = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || ((c = Gh()), (a["gtm.uniqueEventId"] = c), Ph("gtm.uniqueEventId", c));
    return hs(a);
  }
  function Xs(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ma(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0;
    }
    return !1;
  }
  function Ys() {
    for (var a = !1; !Ss && (0 < Ps.length || 0 < Qs.length); ) {
      if (!Rs && Xs(Ps[0])) {
        var b = {},
          c = ((b.event = "gtm.init_consent"), b),
          d = {},
          e = ((d.event = "gtm.init"), d),
          f = Ps[0]["gtm.uniqueEventId"];
        f &&
          ((c["gtm.uniqueEventId"] = f - 2), (e["gtm.uniqueEventId"] = f - 1));
        Ps.unshift(c, e);
        Rs = !0;
      }
      Ss = !0;
      delete Jh.eventModel;
      Lh();
      var p = null,
        q = void 0,
        r = void 0;
      if (Qs.length) {
        var u = Qs.shift();
        p = u.message;
        q = u.debugContext;
        r = !0;
      }
      null == p && (p = Ps.shift());
      if (null != p) {
        var t = sr(p);
        t && ((p = ur(p)), Qh());
        try {
          if (Ca(p))
            try {
              p.call(Nh);
            } catch (C) {}
          else if (Ea(p)) {
            var v = p;
            if (m(v[0])) {
              var x = v[0].split("."),
                y = x.pop(),
                w = v.slice(1),
                A = Mh(x.join("."), 2);
              if (null != A)
                try {
                  A[y].apply(A, w);
                } catch (C) {}
            }
          } else {
            if (Ma(p)) {
              a: {
                if (p.length && m(p[0])) {
                  var B = qs[p[0]];
                  if (B && (!t || !rs[p[0]])) {
                    p = B(p, q, r);
                    break a;
                  }
                }
                p = void 0;
              }
              if (!p) {
                Ss = !1;
                continue;
              }
            }
            a = Ws(p) || a;
            if (Xs(p)) {
              var E = p["gtm.uniqueEventId"];
              void 0 !== E && (Zs(E), (Ns = E));
            }
          }
        } finally {
          t && Lh(!0);
        }
      }
      Ss = !1;
    }
    return !a;
  }
  function $s() {
    var b = Ys();
    try {
      ss(Ie.J);
    } catch (c) {}
    return b;
  }
  function yr(a) {
    var b = a.notBeforeEventId;
    Ns < b
      ? ((Os[String(b)] = Os[String(b)] || []), Os[String(b)].push(a))
      : (Qs.push(a),
        Qs.sort(Ar),
        K(function () {
          Ss || Ys();
        }));
  }
  function Zs(a) {
    for (var b = Os[String(a)] || [], c = 0; c < b.length; c++) Qs.push(b[c]);
    b.length && Qs.sort(Ar);
    delete Os[String(a)];
  }
  var bt = function () {
      var a = Hb(nh.ca, []),
        b = Hb("google_tag_manager", {});
      Os = wr().get();
      Zs(0);
      zr();
      b = b[nh.ca] = b[nh.ca] || {};
      Em(function () {
        if (!b.gtmDom) {
          b.gtmDom = !0;
          var e = {};
          a.push(((e.event = "gtm.dom"), e));
        }
      });
      xs(function () {
        if (!b.gtmLoad) {
          b.gtmLoad = !0;
          var e = {};
          a.push(((e.event = "gtm.load"), e));
        }
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function () {
        var e;
        if (0 < S.SANDBOXED_JS_SEMAPHORE) {
          e = [];
          for (var f = 0; f < arguments.length; f++)
            e[f] = new tr(arguments[f]);
        } else e = [].slice.call(arguments, 0);
        Ps.push.apply(Ps, e);
        var g = c.apply(a, e);
        if (300 < this.length) for (jg(4); 300 < this.length; ) this.shift();
        var h = "boolean" !== typeof g || g;
        return Ys() && h;
      };
      var d = a.slice(0);
      Ps.push.apply(Ps, d);
      if (at()) {
        K($s);
      }
    },
    at = function () {
      var a = !0;
      return a;
    };
  function ct(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ta();
    return b < c + 3e5 && b > c - 9e5;
  }
  var dt = {};
  dt.Ud = new String("undefined");
  var gt = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Yb(a, "className"),
        "gtm.elementId": a["for"] || Sb(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Yb(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Yb(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    ht = function (a) {
      S.hasOwnProperty("autoEventsSettings") || (S.autoEventsSettings = {});
      var b = S.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    it = function (a, b, c) {
      ht(a)[b] = c;
    },
    jt = function (a, b, c, d) {
      var e = ht(a),
        f = Ua(e, b, d);
      e[b] = c(f);
    },
    kt = function (a, b, c) {
      var d = ht(a);
      return Ua(d, b, c);
    },
    lt = function (a) {
      return "string" === typeof a ? a : String(Gh());
    };
  var Kt = !!z.MutationObserver,
    Lt = void 0,
    Mt = function (a) {
      if (!Lt) {
        var b = function () {
          var c = J.body;
          if (c)
            if (Kt)
              new MutationObserver(function () {
                for (var e = 0; e < Lt.length; e++) K(Lt[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              Qb(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  K(function () {
                    d = !1;
                    for (var e = 0; e < Lt.length; e++) K(Lt[e]);
                  }));
              });
            }
        };
        Lt = [];
        J.body ? b() : K(b);
      }
      Lt.push(a);
    };
  var Xt = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((Ta() - e) * g.playbackRate) / 1e3 : 0;
      e = Ta();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, h, k) {
        var n = a(),
          p = n.Bf,
          q =
            void 0 !== k
              ? Math.round(k)
              : void 0 !== h
              ? Math.round(n.Bf * h)
              : Math.round(n.lh),
          r =
            void 0 !== h
              ? Math.round(100 * h)
              : 0 >= p
              ? 0
              : Math.round((q / p) * 100),
          u = J.hidden ? !1 : 0.5 <= Yh(c);
        d();
        var t = void 0;
        void 0 !== b && (t = [b]);
        var v = gt(c, "gtm.video", t);
        v["gtm.videoProvider"] = "youtube";
        v["gtm.videoStatus"] = g;
        v["gtm.videoUrl"] = n.url;
        v["gtm.videoTitle"] = n.title;
        v["gtm.videoDuration"] = Math.round(p);
        v["gtm.videoCurrentTime"] = Math.round(q);
        v["gtm.videoElapsedTime"] = Math.round(f);
        v["gtm.videoPercent"] = r;
        v["gtm.videoVisible"] = u;
        return v;
      },
      Lh: function () {
        e = Ta();
      },
      qc: function () {
        d();
      },
    };
  };
  var Yt = z.clearTimeout,
    Zt = z.setTimeout,
    V = function (a, b, c, d) {
      if (on()) {
        b && K(b);
      } else return Mb(a, b, c, d);
    },
    $t = function () {
      return new Date();
    },
    au = function () {
      return z.location.href;
    },
    bu = function (a) {
      return ii(ki(a), "fragment");
    },
    cu = function (a) {
      return ji(ki(a));
    },
    du = function (a, b) {
      return Mh(a, b || 2);
    },
    eu = function (a, b, c) {
      return b ? Us(a, b, c) : Ts(a);
    },
    fu = function (a, b) {
      z[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    gu = function (a, b, c) {
      return Oi(a, b, void 0 === c ? !0 : !!c);
    },
    hu = function (a, b, c) {
      return 0 === Xi(a, b, c);
    },
    iu = function (a, b) {
      if (on()) {
        b && K(b);
      } else Ob(a, b);
    },
    ju = function (a) {
      return !!kt(a, "init", !1);
    },
    ku = function (a) {
      it(a, "init", !0);
    },
    lu = function (a, b, c) {
      bm && (sc(a) || pm(c, b, a));
    };
  var Ju = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function Ku(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var Lu = new Ja();
  function Mu(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Lu.get(e);
      f || ((f = new RegExp(b, d)), Lu.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Nu(a, b) {
    function c(g) {
      var h = ki(g),
        k = ii(h, "protocol"),
        n = ii(h, "host", !0),
        p = ii(h, "port"),
        q = ii(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === k ||
        ("http" === k && "80" === p) ||
        ("https" === k && "443" === p)
      )
        (k = "web"), (p = "default");
      return [k, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Ou(a) {
    return Pu(a) ? 1 : 0;
  }
  function Pu(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = oc(a, {});
        oc({ arg1: c[d], any_of: void 0 }, e);
        if (Ou(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Ju.length; g++) {
                var h = Ju[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (k) {}
          f = !1;
        }
        return f;
      case "_ew":
        return Ku(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return Mu(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Nu(b, c);
    }
    return !1;
  }
  function Qu(a, b) {
    var c = this;
  }
  Qu.N = "addConsentListener";
  var Ru;
  var Su = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (Ru)
        try {
          a[b]();
        } catch (c) {
          jg(77);
        }
      else a[b]();
  };
  function Tu(a, b, c) {
    var d = this,
      e;
    M(
      I(this),
      ["eventName:!string", "callback:!Fn", "triggerId:?string"],
      arguments
    ),
      Su([
        function () {
          return N(d, "listen_data_layer", a);
        },
      ]),
      (e = cs().o(a, qc(b), c));
    return e;
  }
  Tu.M = "internal.addDataLayerEventListener";
  function Uu(a, b, c) {}
  Uu.N = "addDocumentEventListener";
  function Vu(a, b, c, d) {}
  Vu.N = "addElementEventListener";
  function Wu(a) {}
  Wu.N = "addEventCallback";
  function $u(a) {}
  $u.M = "internal.addFormAbandonmentListener";
  var av = {},
    bv = [],
    cv = {},
    dv = 0,
    ev = 0;
  function lv(a, b) {}
  lv.M = "internal.addFormInteractionListener";
  function sv(a, b) {}
  sv.M = "internal.addFormSubmitListener";
  function xv(a) {}
  xv.M = "internal.addGaSendListener";
  var yv = {},
    zv = [];
  var Gv = function (a, b) {};
  Gv.M = "internal.addHistoryChangeListener";
  function Hv(a, b, c) {}
  Hv.N = "addWindowEventListener";
  function Iv(a, b) {
    return !0;
  }
  Iv.N = "aliasInWindow";
  function Jv(a, b, c) {}
  Jv.M = "internal.appendRemoteConfigParameter";
  function Kv() {
    var a = 2;
    return a;
  }
  function Lv(a, b) {
    var c;
    return c;
  }
  Lv.N = "callInWindow";
  function Mv(a) {}
  Mv.N = "callLater";
  function Nv(a) {}
  Nv.M = "callOnDomReady";
  function Ov(a) {
    M(I(this), ["listener:!Fn"], arguments);
    N(this, "process_dom_events", "window", "load");
    xs(qc(a));
  }
  Ov.M = "callOnWindowLoad";
  function Pv(a) {
    var b;
    return b;
  }
  Pv.M = "internal.computeGtmParameter";
  function Qv(a, b) {
    var c;
    var d = pc(c, this.g, Kv());
    void 0 === d && void 0 !== c && jg(45);
    return d;
  }
  Qv.N = "copyFromDataLayer";
  function Rv(a) {
    var b;
    return b;
  }
  Rv.N = "copyFromWindow";
  function Sv(a, b) {
    var c;
    return c;
  }
  Sv.M = "internal.copyPreHit";
  function Tv(a, b) {
    var c = null,
      d = Kv();
    return pc(c, this.g, d);
  }
  Tv.N = "createArgumentsQueue";
  function Uv(a) {
    var b;
    return pc(b, this.g, Kv());
  }
  Uv.N = "createQueue";
  var Vv = {},
    Wv = [],
    Xv = {},
    Yv = 0,
    Zv = 0;
  function ew(a, b) {
    var c = this;
    return b;
  }
  ew.M = "internal.enableAutoEventOnFormInteraction";
  function jw(a, b) {
    var c = this;
    return b;
  }
  jw.M = "internal.enableAutoEventOnFormSubmit";
  function ow() {
    var a = this;
  }
  ow.M = "internal.enableAutoEventOnGaSend";
  var pw = {},
    qw = [];
  var sw = function (a, b) {
      var c = "" + b;
      if (pw[c]) pw[c].push(a);
      else {
        var d = [a];
        pw[c] = d;
        var e = rw(),
          f = -1;
        qw.push(function (g) {
          0 <= f && z.clearTimeout(f);
          b
            ? (f = z.setTimeout(function () {
                e(g, d);
                f = -1;
              }, b))
            : e(g, d);
        });
      }
    },
    rw = function () {
      var a = z.location.href,
        b = {
          source: null,
          state: z.history.state || null,
          url: ji(ki(a)),
          O: ii(ki(a), "fragment"),
        };
      return function (c, d) {
        var e = b,
          f = {};
        f[e.source] = !0;
        f[c.source] = !0;
        if (!f.popstate || !f.hashchange || e.O != c.O) {
          var g = {},
            h =
              ((g.event = "gtm.historyChange-v2"),
              (g["gtm.historyChangeSource"] = c.source),
              (g["gtm.oldUrlFragment"] = b.O),
              (g["gtm.newUrlFragment"] = c.O),
              (g["gtm.oldHistoryState"] = b.state),
              (g["gtm.newHistoryState"] = c.state),
              (g["gtm.oldUrl"] = b.url),
              (g["gtm.newUrl"] = c.url),
              (g["gtm.triggers"] = d.join(",")),
              g);
          b = c;
          Ts(h);
        }
      };
    },
    tw = function (a, b) {
      var c = z.history,
        d = c[a];
      if (Ca(d))
        try {
          c[a] = function (e, f, g) {
            d.apply(c, [].slice.call(arguments, 0));
            var h = z.location.href;
            b({
              source: a,
              state: e,
              url: ji(ki(h)),
              O: ii(ki(h), "fragment"),
            });
          };
        } catch (e) {}
    },
    vw = function (a) {
      z.addEventListener("popstate", function (b) {
        var c = uw(b);
        a({
          source: "popstate",
          state: b.state,
          url: ji(ki(c)),
          O: ii(ki(c), "fragment"),
        });
      });
    },
    ww = function (a) {
      z.addEventListener("hashchange", function (b) {
        var c = uw(b);
        a({
          source: "hashchange",
          state: null,
          url: ji(ki(c)),
          O: ii(ki(c), "fragment"),
        });
      });
    },
    uw = function (a) {
      return a.target && a.target.location && a.target.location.href
        ? a.target.location.href
        : z.location.href;
    };
  function xw(a, b) {
    var c = this;
    M(I(this), ["options:?DustMap", "triggerId:?*"], arguments);
    Su([
      function () {
        return N(c, "process_dom_events", "window", "popstate");
      },
      function () {
        return N(c, "process_dom_events", "window", "pushstate");
      },
    ]);
    b = lt(b);
    var d = Number(a && a.get("interval"));
    (0 < d && isFinite(d)) || (d = 0);
    if (kt("ehl", "init", !1)) {
      var e = kt("ehl", "reg");
      e && e(b, d);
    } else {
      var f = function (g) {
        for (var h = 0; h < qw.length; h++) qw[h](g);
      };
      ww(f);
      vw(f);
      tw("pushState", f);
      tw("replaceState", f);
      sw(b, d);
      it("ehl", "reg", sw);
      it("ehl", "init", !0);
    }
    return b;
  }
  xw.M = "internal.enableAutoEventOnHistoryChange";
  var yw = function (a, b) {
      if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = Yb(b, "href"),
        d = c.indexOf("#"),
        e = Yb(b, "target");
      if ((e && "_self" !== e && "_parent" !== e && "_top" !== e) || 0 === d)
        return !1;
      if (0 < d) {
        var f = ji(ki(c)),
          g = ji(ki(z.location.href));
        return f !== g;
      }
      return !0;
    },
    zw = function (a, b) {
      for (
        var c = ii(
            ki(
              (b.attributes && b.attributes.formaction ? b.formAction : "") ||
                b.action ||
                Yb(b, "href") ||
                b.src ||
                b.code ||
                b.codebase ||
                ""
            ),
            "host"
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    Aw = function () {
      var a = 0,
        b = function (c) {
          var d = c.target;
          if (
            d &&
            3 !== c.which &&
            !(c.Jf || (c.timeStamp && c.timeStamp === a))
          ) {
            a = c.timeStamp;
            d = Vb(d, ["a", "area"], 100);
            if (!d) return c.returnValue;
            var e = c.defaultPrevented || !1 === c.returnValue,
              f = kt("aelc", e ? "nv.mwt" : "mwt", 0),
              g;
            g = e ? kt("aelc", "nv.ids", []) : kt("aelc", "ids", []);
            for (var h = [], k = 0; k < g.length; k++) {
              var n = g[k],
                p = kt("aelc", "aff.map", {})[n];
              (p && !zw(p, d)) || h.push(n);
            }
            if (h.length) {
              var q = yw(c, d),
                r = gt(d, "gtm.linkClick", h);
              r["gtm.elementText"] = Tb(d);
              r["gtm.willOpenInNewWindow"] = !q;
              if (q && !e && f && d.href) {
                var u = !!Ga(
                  String(Yb(d, "rel") || "").split(" "),
                  function (y) {
                    return "noreferrer" === y.toLowerCase();
                  }
                );
                u && jg(36);
                var t = z[(Yb(d, "target") || "_self").substring(1)],
                  v = !0,
                  x = Vs(function () {
                    var y;
                    if ((y = v && t)) {
                      var w;
                      a: if (u) {
                        var A;
                        try {
                          A = new MouseEvent(c.type, { bubbles: !0 });
                        } catch (B) {
                          if (!J.createEvent) {
                            w = !1;
                            break a;
                          }
                          A = J.createEvent("MouseEvents");
                          A.initEvent(c.type, !0, !0);
                        }
                        A.Jf = !0;
                        c.target.dispatchEvent(A);
                        w = !0;
                      } else w = !1;
                      y = !w;
                    }
                    y && (t.location.href = Yb(d, "href"));
                  }, f);
                if (Us(r, x, f)) v = !1;
                else
                  return (
                    c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                  );
              } else Us(r, function () {}, f || 2e3);
              return !0;
            }
          }
        };
      Qb(J, "click", b, !1);
      Qb(J, "auxclick", b, !1);
    };
  function Bw(a, b) {
    var c = this;
    M(I(this), ["dustOptions:?DustMap", "triggerId:?*"], arguments);
    Su([
      function () {
        return N(c, "process_dom_events", "document", "click");
      },
      function () {
        return N(c, "process_dom_events", "document", "auxclick");
      },
    ]);
    var d = qc(a),
      e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = lt(b);
    if (e) {
      var h = Number(d.waitForTagsTimeout);
      (0 < h && isFinite(h)) || (h = 2e3);
      var k = function (p) {
        return Math.max(h, p);
      };
      jt("aelc", "mwt", k, 0);
      f || jt("aelc", "nv.mwt", k, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    jt("aelc", "ids", n, []);
    f || jt("aelc", "nv.ids", n, []);
    g &&
      jt(
        "aelc",
        "aff.map",
        function (p) {
          p[b] = g;
          return p;
        },
        {}
      );
    kt("aelc", "init", !1) || (Aw(), it("aelc", "init", !0));
    return b;
  }
  Bw.M = "internal.enableAutoEventOnLinkClick";
  var Cw, Dw;
  var Ew = function (a) {
      return kt("sdl", a, {});
    },
    Fw = function (a, b, c) {
      b &&
        (Array.isArray(a) || (a = [a]),
        jt(
          "sdl",
          c,
          function (d) {
            for (var e = 0; e < a.length; e++) {
              var f = String(a[e]);
              d.hasOwnProperty(f) || (d[f] = []);
              d[f].push(b);
            }
            return d;
          },
          {}
        ));
    },
    Iw = function () {
      var a = 250,
        b = !1;
      J.scrollingElement &&
        J.documentElement &&
        z.addEventListener &&
        ((a = 50), (b = !0));
      var c = 0,
        d = !1,
        e = function () {
          d
            ? (c = z.setTimeout(e, a))
            : ((c = 0),
              Gw(),
              kt("sdl", "init", !1) &&
                !Hw() &&
                (Rb(z, "scroll", f),
                Rb(z, "resize", f),
                it("sdl", "init", !1)));
          d = !1;
        },
        f = function () {
          b && Cw();
          c ? (d = !0) : ((c = z.setTimeout(e, a)), it("sdl", "pending", !0));
        };
      return f;
    },
    Gw = function () {
      var a = Cw(),
        b = a.zf,
        c = a.Af,
        d = (b / Dw.scrollWidth) * 100,
        e = (c / Dw.scrollHeight) * 100;
      Jw(b, "horiz.pix", "PIXELS", "horizontal");
      Jw(d, "horiz.pct", "PERCENT", "horizontal");
      Jw(c, "vert.pix", "PIXELS", "vertical");
      Jw(e, "vert.pct", "PERCENT", "vertical");
      it("sdl", "pending", !1);
    },
    Jw = function (a, b, c, d) {
      var e = Ew(b),
        f = {},
        g;
      for (g in e) {
        f.Wb = g;
        if (e.hasOwnProperty(f.Wb)) {
          var h = Number(f.Wb);
          if (!(a < h)) {
            var k = {};
            Ts(
              ((k.event = "gtm.scrollDepth"),
              (k["gtm.scrollThreshold"] = h),
              (k["gtm.scrollUnits"] = c.toLowerCase()),
              (k["gtm.scrollDirection"] = d),
              (k["gtm.triggers"] = e[f.Wb].join(",")),
              k)
            );
            jt(
              "sdl",
              b,
              (function (n) {
                return function (p) {
                  delete p[n.Wb];
                  return p;
                };
              })(f),
              {}
            );
          }
        }
        f = { Wb: f.Wb };
      }
    },
    Lw = function () {
      jt(
        "sdl",
        "scr",
        function (a) {
          a || (a = J.scrollingElement || (J.body && J.body.parentNode));
          return (Dw = a);
        },
        !1
      );
      jt(
        "sdl",
        "depth",
        function (a) {
          a || (a = Kw());
          return (Cw = a);
        },
        !1
      );
    },
    Kw = function () {
      var a = 0,
        b = 0;
      return function () {
        var c = Xh(),
          d = c.height;
        a = Math.max(Dw.scrollLeft + c.width, a);
        b = Math.max(Dw.scrollTop + d, b);
        return { zf: a, Af: b };
      };
    },
    Hw = function () {
      return !!(
        Object.keys(Ew("horiz.pix")).length ||
        Object.keys(Ew("horiz.pct")).length ||
        Object.keys(Ew("vert.pix")).length ||
        Object.keys(Ew("vert.pct")).length
      );
    };
  function Mw(a, b) {
    var c = this;
    M(I(this), ["options:!DustMap", "triggerId:?*"], arguments);
    Su([
      function () {
        return N(c, "process_dom_events", "window", "resize");
      },
      function () {
        return N(c, "process_dom_events", "window", "scroll");
      },
    ]);
    Lw();
    if (!Dw) return;
    b = lt(b);
    var d = qc(a);
    switch (d.horizontalThresholdUnits) {
      case "PIXELS":
        Fw(d.horizontalThresholds, b, "horiz.pix");
        break;
      case "PERCENT":
        Fw(d.horizontalThresholds, b, "horiz.pct");
    }
    switch (d.verticalThresholdUnits) {
      case "PIXELS":
        Fw(d.verticalThresholds, b, "vert.pix");
        break;
      case "PERCENT":
        Fw(d.verticalThresholds, b, "vert.pct");
    }
    kt("sdl", "init", !1)
      ? kt("sdl", "pending", !1) ||
        K(function () {
          return Gw();
        })
      : (it("sdl", "init", !0),
        it("sdl", "pending", !0),
        K(function () {
          Gw();
          if (Hw()) {
            var e = Iw();
            Qb(z, "scroll", e);
            Qb(z, "resize", e);
          } else it("sdl", "init", !1);
        }));
    return b;
  }
  Mw.M = "internal.enableAutoEventOnScroll";
  var Db = ca(["data-gtm-yt-inspected-"]),
    Nw = ["www.youtube.com", "www.youtube-nocookie.com"],
    Ow,
    Pw = !1;
  var Qw = function (a, b, c) {
      var d = a.map(function (g) {
        return { na: g, vd: g, rd: void 0 };
      });
      if (!b.length) return d;
      var e = b.map(function (g) {
        return { na: g * c, vd: void 0, rd: g };
      });
      if (!d.length) return e;
      var f = d.concat(e);
      f.sort(function (g, h) {
        return g.na - h.na;
      });
      return f;
    },
    Rw = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++) 0 > a[c] || b.push(a[c]);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    Sw = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++)
        100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    Tw = function (a, b) {
      var c, d;
      function e() {
        u = Xt(
          function () {
            return {
              url: x,
              title: y,
              Bf: v,
              lh: a.getCurrentTime(),
              playbackRate: w,
            };
          },
          b.Za,
          a.getIframe()
        );
        v = 0;
        y = x = "";
        w = 1;
        return f;
      }
      function f(C) {
        switch (C) {
          case 1:
            v = Math.round(a.getDuration());
            x = a.getVideoUrl();
            if (a.getVideoData) {
              var D = a.getVideoData();
              y = D ? D.title : "";
            }
            w = a.getPlaybackRate();
            b.vf ? Ts(u.createEvent("start")) : u.qc();
            t = Qw(b.Uf, b.Tf, a.getDuration());
            return g(C);
          default:
            return f;
        }
      }
      function g() {
        A = a.getCurrentTime();
        B = Sa().getTime();
        u.Lh();
        r();
        return h;
      }
      function h(C) {
        var D;
        switch (C) {
          case 0:
            return n(C);
          case 2:
            D = "pause";
          case 3:
            var F = a.getCurrentTime() - A;
            D =
              1 < Math.abs(((Sa().getTime() - B) / 1e3) * w - F)
                ? "seek"
                : D || "buffering";
            a.getCurrentTime() && (b.uf ? Ts(u.createEvent(D)) : u.qc());
            q();
            return k;
          case -1:
            return e(C);
          default:
            return h;
        }
      }
      function k(C) {
        switch (C) {
          case 0:
            return n(C);
          case 1:
            return g(C);
          case -1:
            return e(C);
          default:
            return k;
        }
      }
      function n() {
        for (; d; ) {
          var C = c;
          z.clearTimeout(d);
          C();
        }
        b.tf && Ts(u.createEvent("complete", 1));
        return e(-1);
      }
      function p() {}
      function q() {
        d && (z.clearTimeout(d), (d = 0), (c = p));
      }
      function r() {
        if (t.length && 0 !== w) {
          var C = -1,
            D;
          do {
            D = t[0];
            if (D.na > a.getDuration()) return;
            C = (D.na - a.getCurrentTime()) / w;
            if (0 > C && (t.shift(), 0 === t.length)) return;
          } while (0 > C);
          c = function () {
            d = 0;
            c = p;
            0 < t.length &&
              t[0].na === D.na &&
              (t.shift(), Ts(u.createEvent("progress", D.rd, D.vd)));
            r();
          };
          d = z.setTimeout(c, 1e3 * C);
        }
      }
      var u,
        t = [],
        v,
        x,
        y,
        w,
        A,
        B,
        E = e(-1);
      d = 0;
      c = p;
      return {
        onStateChange: function (C) {
          E = E(C);
        },
        onPlaybackRateChange: function (C) {
          A = a.getCurrentTime();
          B = Sa().getTime();
          u.qc();
          w = C;
          q();
          r();
        },
      };
    },
    Vw = function (a) {
      K(function () {
        function b() {
          for (
            var d = c.getElementsByTagName("iframe"), e = d.length, f = 0;
            f < e;
            f++
          )
            Uw(d[f], a);
        }
        var c = J;
        b();
        Mt(b);
      });
    },
    Uw = function (a, b) {
      if (
        !a.getAttribute("data-gtm-yt-inspected-" + b.Za) &&
        (Cb(a, "data-gtm-yt-inspected-" + b.Za), Ww(a, b.jd))
      ) {
        a.id || (a.id = Xw());
        var c = z.YT,
          d = c.get(a.id);
        d || (d = new c.Player(a.id));
        var e = Tw(d, b),
          f = {},
          g;
        for (g in e)
          (f.Dc = g),
            e.hasOwnProperty(f.Dc) &&
              d.addEventListener(
                f.Dc,
                (function (h) {
                  return function (k) {
                    return e[h.Dc](k.data);
                  };
                })(f)
              ),
            (f = { Dc: f.Dc });
      }
    },
    Ww = function (a, b) {
      var c = a.getAttribute("src");
      if (Yw(c, "embed/")) {
        if (0 < c.indexOf("enablejsapi=1")) return !0;
        if (b) {
          var d;
          var e = -1 !== c.indexOf("?") ? "&" : "?";
          -1 < c.indexOf("origin=")
            ? (d = c + e + "enablejsapi=1")
            : (Ow ||
                ((Ow = J.location.protocol + "//" + J.location.hostname),
                J.location.port && (Ow += ":" + J.location.port)),
              (d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(Ow)));
          var f;
          f = rb(d);
          a.src = qb(f).toString();
          return !0;
        }
      }
      return !1;
    },
    Yw = function (a, b) {
      if (!a) return !1;
      for (var c = 0; c < Nw.length; c++)
        if (0 <= a.indexOf("//" + Nw[c] + "/" + b)) return !0;
      return !1;
    },
    Xw = function () {
      var a = Math.round(1e9 * Math.random()) + "";
      return J.getElementById(a) ? Xw() : a;
    };
  function Zw(a, b) {
    var c = this;
    M(I(this), ["dustOptions:!DustMap", "triggerId:?*"], arguments);
    Su([
      function () {
        return N(c, "process_dom_events", "element", "onStateChange");
      },
      function () {
        return N(c, "process_dom_events", "element", "onPlaybackRateChange");
      },
    ]);
    b = lt(b);
    var d = !!a.get("captureStart"),
      e = !!a.get("captureComplete"),
      f = !!a.get("capturePause"),
      g = Sw(qc(a.get("progressThresholdsPercent"))),
      h = Rw(qc(a.get("progressThresholdsTimeInSeconds"))),
      k = !!a.get("fixMissingApi");
    if (!(d || e || f || g.length || h.length)) return;
    var n = { vf: d, tf: e, uf: f, Tf: g, Uf: h, jd: k, Za: b },
      p = z.YT,
      q = function () {
        Vw(n);
      };
    if (p) return p.ready && p.ready(q), b;
    var r = z.onYouTubeIframeAPIReady;
    z.onYouTubeIframeAPIReady = function () {
      r && r();
      q();
    };
    K(function () {
      for (
        var u = J.getElementsByTagName("script"), t = u.length, v = 0;
        v < t;
        v++
      ) {
        var x = u[v].getAttribute("src");
        if (Yw(x, "iframe_api") || Yw(x, "player_api")) return b;
      }
      for (
        var y = J.getElementsByTagName("iframe"), w = y.length, A = 0;
        A < w;
        A++
      )
        if (!Pw && Ww(y[A], n.jd))
          return Mb("https://www.youtube.com/iframe_api"), (Pw = !0), b;
    });
    return b;
  }
  Zw.M = "internal.enableAutoEventOnYouTubeActivity";
  function $w(a) {
    return !1;
  }
  $w.M = "internal.evaluateFilteringRules";
  var ax;
  function bx(a) {
    var b = !1;
    return b;
  }
  bx.M = "internal.evaluateMatchingRules";
  var dx = function (a, b, c) {
      if (c)
        switch (c.type) {
          case "event_name":
            return a;
          case "const":
            return c.const_value;
          case "event_param":
            var d = c.event_param.param_name;
            return b[d];
        }
    },
    gx = function (a, b, c, d) {
      if (c && !ex(a, b, c)) return !1;
      if (!d || 0 === d.length) return !0;
      for (var e = 0; e < d.length; e++)
        if (fx(a, b, d[e].predicates || [])) return !0;
      return !1;
    },
    fx = function (a, b, c) {
      for (var d = 0; d < c.length; d++) if (!ex(a, b, c[d])) return !1;
      return !0;
    },
    ex = function (a, b, c) {
      var d = c.values || [],
        e = dx(a, b, d[0]),
        f = dx(a, b, d[1]),
        g = c.type;
      if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g)
        m(e) && (e = e.toLowerCase()), m(f) && (f = f.toLowerCase());
      var h = !1;
      switch (g) {
        case "eq":
        case "eqi":
          h = String(e) === String(f);
          break;
        case "sw":
        case "swi":
          h = 0 === String(e).indexOf(String(f));
          break;
        case "ew":
        case "ewi":
          h = Ku(e, f);
          break;
        case "cn":
        case "cni":
          h = 0 <= String(e).indexOf(String(f));
          break;
        case "lt":
          h = Number(e) < Number(f);
          break;
        case "le":
          h = Number(e) <= Number(f);
          break;
        case "gt":
          h = Number(e) > Number(f);
          break;
        case "ge":
          h = Number(e) >= Number(f);
          break;
        case "re":
        case "rei":
          h = Mu(e, f, "rei" === g);
      }
      return !!c.negate !== h;
    };
  function hx(a, b) {
    var c = !1;
    return c;
  }
  hx.M = "internal.evaluatePredicates";
  var ix = function (a) {
    var b;
    return b;
  };
  function jx(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  jx.N = "getCookieValues";
  function kx() {
    return eg.jh;
  }
  kx.M = "internal.getCountryCode";
  function lx() {
    var a = [];
    return pc(a);
  }
  lx.M = "internal.getDestinationIds";
  function mx(a) {
    var b = null;
    return b;
  }
  mx.N = "getElementById";
  function nx(a, b) {
    var c;
    M(I(this), ["targetId:!string", "name:!string"], arguments);
    var d = Vh(a) || {};
    c = pc(d[b], this.g);
    return c;
  }
  nx.M = "internal.getProductSettingsParameter";
  function ox(a, b) {
    var c;
    M(I(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
    N(this, "get_url", "query", a);
    var d = ii(ki(z.location.href), "query"),
      e = fi(d, a, b);
    c = pc(e, this.g);
    return c;
  }
  ox.N = "getQueryParameters";
  function px(a, b) {
    var c;
    return c;
  }
  px.N = "getReferrerQueryParameters";
  function qx(a) {
    var b = "";
    return b;
  }
  qx.N = "getReferrerUrl";
  function rx() {
    return eg.Ih;
  }
  rx.M = "internal.getRegionCode";
  function sx(a, b) {
    var c;
    M(I(this), ["targetId:!string", "name:!string"], arguments);
    var d = er(a);
    c = pc(d[b], this.g);
    return c;
  }
  sx.M = "internal.getRemoteConfigParameter";
  function tx(a) {
    var b = "";
    M(I(this), ["component:?string"], arguments),
      N(this, "get_url", a),
      (b = ii(ki(z.location.href), a));
    return b;
  }
  tx.N = "getUrl";
  function ux() {
    N(this, "get_user_agent");
    return z.navigator.userAgent;
  }
  ux.N = "getUserAgent";
  function vx(a) {
    if (!a) return {};
    var b = a.vj;
    return Gm(b.type, b.index, b.name);
  }
  function xx(a, b) {}
  xx.N = "gtagSet";
  function yx(a, b) {}
  yx.N = "injectHiddenIframe";
  var zx = {};
  function Ax(a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          Mb(
            a,
            function () {
              for (var g = e[f][0], h = 0; h < g.length; h++) K(g[h]);
              g.push = function (k) {
                K(k);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], h = 0; h < g.length; h++) K(g[h]);
              e[f] = null;
            },
            b
          ))
      : Mb(a, c, d, b);
  }
  function Bx(a, b, c, d) {}
  var Cx = Object.freeze({ dl: 1, id: 1 }),
    Dx = {};
  function Ex(a, b, c, d) {}
  Bx.N = "injectScript";
  Ex.M = "internal.injectScript";
  function Fx(a) {
    var b = !0;
    return b;
  }
  Fx.N = "isConsentGranted";
  var Gx = (function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Qe || Se) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return pc(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(qc(c));
      }),
    };
  })(function (a) {
    var b = this.g.g;
    b && b.log.call(this, "error", a);
  });
  Gx.N = "JSON";
  var Hx = function () {
      return !1;
    },
    Ix = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  var Jx = ["textContent", "value", "tagName", "children", "childElementCount"];
  function Kx(a) {
    var b;
    return b;
  }
  Kx.M = "internal.locateUserData";
  function Lx() {}
  Lx.N = "logToConsole";
  function Mx(a, b) {
    var c;
    return c;
  }
  Mx.M = "internal.newInWindow";
  function Nx(a) {
    var b = void 0;
    if ("function" === typeof URL) {
      var c;
      a: {
        var d;
        try {
          d = new URL(a);
        } catch (x) {
          c = void 0;
          break a;
        }
        for (
          var e = {}, f = Array.from(d.searchParams), g = 0;
          g < f.length;
          g++
        ) {
          var h = f[g][0],
            k = f[g][1];
          e.hasOwnProperty(h)
            ? "string" === typeof e[h]
              ? (e[h] = [e[h], k])
              : e[h].push(k)
            : (e[h] = k);
        }
        c = pc({
          href: d.href,
          origin: d.origin,
          protocol: d.protocol,
          username: d.username,
          password: d.password,
          host: d.host,
          hostname: d.hostname,
          port: d.port,
          pathname: d.pathname,
          search: d.search,
          searchParams: e,
          hash: d.hash,
        });
      }
      return c;
    }
    var n;
    try {
      n = ki(a);
    } catch (x) {
      return;
    }
    if (!n.protocol || !n.host) return;
    var p = {};
    if (n.search)
      for (
        var q = n.search.replace("?", "").split("&"), r = 0;
        r < q.length;
        r++
      ) {
        var u = q[r].split("="),
          t = u[0],
          v = decodeURIComponent(u.splice(1).join("="));
        p.hasOwnProperty(t)
          ? "string" === typeof p[t]
            ? (p[t] = [p[t], v])
            : p[t].push(v)
          : (p[t] = v);
      }
    n.searchParams = p;
    n.origin = n.protocol + "//" + n.host;
    n.username = "";
    n.password = "";
    b = pc(n);
    return b;
  }
  Nx.N = "parseUrl";
  function Ox(a) {}
  Ox.M = "internal.processAsNewEvent";
  function Px(a, b) {
    var c = !1;
    return c;
  }
  Px.N = "queryPermission";
  function Qx() {
    var a = "";
    return a;
  }
  Qx.N = "readCharacterSet";
  function Rx() {
    var a = "";
    return a;
  }
  Rx.N = "readTitle";
  function Sx(a, b) {
    var c = this;
  }
  Sx.M = "internal.registerCcdCallback";
  var Tx = Object.freeze(["config", "event", "get", "set"]);
  function Ux(a, b, c) {}
  Ux.M = "internal.registerGtagCommandListener";
  function Vx(a, b) {
    var c = !1;
    return c;
  }
  Vx.M = "internal.removeDataLayerEventListener";
  function Wx() {}
  Wx.N = "resetDataLayer";
  var Yx = !1;
  function Zx(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    M(
      I(this),
      [
        "target:!*",
        "eventName:!*",
        "eventParameters:?DustMap",
        "deferrable:?boolean",
      ],
      arguments
    );
    var e = c ? qc(c) : {},
      f = qc(a);
    Array.isArray(f) || (f = [f]);
    b = String(b);
    d = !!d;
    var g = this.g.g;
    for (var h = 0; h < f.length; h++) {
      var k = f[h],
        n = Co(k);
      if (!n) jg(78);
      else if ("string" === typeof k) {
        var p = oc(e);
        if (Yx) {
          un(n.containerId, fr());
          d && (p[Q.Bb] = d);
          var q = rr(k, b, p);
          xr(q, g.eventId, vx(g));
        } else ar(b, p, k, d);
      }
    }
  }
  Zx.M = "internal.sendGtagEvent";
  function $x(a, b, c) {}
  $x.N = "sendPixel";
  function ay(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  ay.N = "setCookie";
  var by = !1;
  by = !0;
  function cy(a) {
    M(I(this), ["consentSettings:!DustMap"], arguments);
    for (var b = a.Kb(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e !== Q.Ce && N(this, "access_consent", e, "write");
    }
    var f = this.g.g,
      g = f.eventId,
      h = vx(f);
    if (by) {
      var k = or("consent", "default", qc(a));
      xr(k, g, h);
    } else Ig(qc(a));
  }
  cy.N = "setDefaultConsentState";
  function dy(a, b, c) {
    return !1;
  }
  dy.N = "setInWindow";
  function ey(a, b, c) {
    M(I(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    var d = Vh(a) || {};
    d[b] = qc(c, this.g);
    var e = a;
    Th || Uh();
    Sh[e] = d;
  }
  ey.M = "internal.setProductSettingsParameter";
  function fy(a, b, c) {
    M(I(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    for (var d = b.split("."), e = er(a), f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};
      else if (!nc(e[d[f]]))
        throw Error(
          "setRemoteConfigParameter failed, path contains a non-object type: " +
            d[f]
        );
      e = e[d[f]];
    }
    e[d[f]] = qc(c, this.g);
  }
  fy.M = "internal.setRemoteConfigParameter";
  var gy = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  function hy(a, b, c, d) {
    var e = this;
  }
  hy.N = "sha256";
  function iy(a, b, c) {}
  iy.M = "internal.sortRemoteConfigParameters";
  var jy = {},
    ky = {};
  jy.N = "templateStorage";
  jy.getItem = function (a) {
    var b = null;
    return b;
  };
  jy.setItem = function (a, b) {};
  jy.removeItem = function (a) {};
  jy.clear = function () {};
  var ly = function (a) {
    var b;
    return b;
  };
  var my = !1;
  my = !0;
  function ny(a) {
    M(I(this), ["consentSettings:!DustMap"], arguments);
    var b = qc(a),
      c;
    for (c in b) b.hasOwnProperty(c) && N(this, "access_consent", c, "write");
    var d = this.g.g,
      e = d.eventId,
      f = vx(d);
    my ? xr(or("consent", "update", b), e, f) : Kg(b, { eventId: e });
  }
  ny.N = "updateConsentState";
  var oy = function () {
    var a = new Wf(),
      b = function (d) {
        return Yf(a, d.M, d);
      },
      c = function (d) {
        return a.add(d.N, d);
      };
    c(Qu);
    c(Wu);
    c(Iv);
    c(Lv);
    c(Mv);
    c(Qv);
    c(Rv);
    c(Tv);
    c(Uv);
    c(jx);
    c(ox);
    c(px);
    c(qx);
    c(tx);
    c(yx);
    c(Bx);
    c(Fx);
    c(Gx);
    c(Lx);
    c(Nx);
    c(Px);
    c(Qx);
    c(Rx);
    c($x);
    c(ay);
    c(cy);
    c(dy);
    c(hy);
    c(jy);
    c(ny);
    a.add("Math", Bf());
    a.add("Object", Uf);
    a.add("TestHelper", Zf());
    a.add("assertApi", uf);
    a.add("assertThat", vf);
    a.add("decodeUri", Cf);
    a.add("decodeUriComponent", Df);
    a.add("encodeUri", Ef);
    a.add("encodeUriComponent", Ff);
    a.add("fail", Gf);
    a.add("generateRandom", Hf);
    a.add("getContainerVersion", If);
    a.add("getTimestamp", Lf);
    a.add("getTimestampMillis", Lf);
    a.add("getType", Mf);
    a.add("makeInteger", Nf);
    a.add("makeNumber", Of);
    a.add("makeString", Pf);
    a.add("makeTableMap", Qf);
    a.add("mock", Tf);
    a.add("fromBase64", ix, !("atob" in z));
    a.add("localStorage", Ix, !Hx());
    a.add("toBase64", ly, !("btoa" in z));
    b(lv);
    b(sv);
    b(xv);
    b(Gv);
    b(Ov);
    b($w);
    b(bx);
    b(lx);
    b(Ex);
    b(Kx);
    b(Ux);
    b(Zx);
    Yf(a, "internal.getFlags", Kf);
    c(xx);
    b(Jv), b(sx), b(fy), b(iy), b(nx), b(ey);
    b(jw);
    b(ew);
    b(xw);
    b(Tu);
    b(Zw);
    b(Vx);
    b(ow);
    b(Bw);
    b(Mw);
    b(kx);
    b(rx);
    return function (d) {
      var e;
      if (a.g.hasOwnProperty(d)) e = a.get(d, this);
      else {
        var f;
        if ((f = a.o.hasOwnProperty(d))) {
          var g = !1,
            h = this.g.g;
          if (h) {
            var k = h.kd();
            if (k) {
              0 !== k.indexOf("__cvt_") && (g = !0);
            }
          }
          f = g;
        }
        if (f) {
          var n = a.o.hasOwnProperty(d) ? a.o[d] : void 0;
          e = n;
        } else throw Error(d + " is not a valid API name.");
      }
      return e;
    };
  };
  var py = function () {
      return !1;
    },
    qy = function () {
      var a = {};
      return function (b, c, d) {};
    };
  var ry;
  function sy() {
    var a = ry;
    return function (b, c, d) {
      var e = d && d.event;
      ty(c);
      var f = new hb();
      La(c, function (q, r) {
        var u = pc(r);
        void 0 === u && void 0 !== r && jg(44);
        f.set(q, u);
      });
      a.g.g.I = Ae();
      var g = {
        fj: Ne(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        ce:
          void 0 !== e
            ? function (q) {
                return e.xb.ce(q);
              }
            : void 0,
        kd: function () {
          return b;
        },
        log: function () {},
        vj: { index: d && d.index, type: d && d.type, name: d && d.name },
      };
      if (py()) {
        var h = qy(),
          k = void 0,
          n = void 0;
        g.Ra = {
          Zf: [],
          cd: {},
          Ya: function (q, r, u) {
            1 === r && (k = q);
            7 === r && (n = u);
            h(q, r, u);
          },
          Nf: Rf(),
        };
        g.log = function (q, r) {
          if (k) {
            var u = Array.prototype.slice.call(arguments, 1);
            h(k, 4, { level: q, source: n, message: u });
          }
        };
      }
      var p = Jd(a, g, [b, f]);
      a.g.g.I = void 0;
      p instanceof oa && "return" === p.g && (p = p.o);
      return qc(p);
    };
  }
  function ty(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ca(b) &&
      (a.gtmOnSuccess = function () {
        K(b);
      });
    Ca(c) &&
      (a.gtmOnFailure = function () {
        K(c);
      });
  }
  function uy() {
    ry.g.g.R = function (a, b, c) {
      S.SANDBOXED_JS_SEMAPHORE = S.SANDBOXED_JS_SEMAPHORE || 0;
      S.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        S.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function vy(a) {
    void 0 !== a &&
      La(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          yh[e] = yh[e] || [];
          yh[e].push(b);
        }
      });
  }
  var wy = encodeURI,
    X = encodeURIComponent,
    xy = Pb;
  var yy = function (a, b) {
      if (!a) return !1;
      var c = ii(ki(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    zy = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };

  var Lz = !1;
  var Mz = !1;
  var Nz = !1;
  Nz = !0;
  var Oz = {};
  Oz[Q.bc] = "";
  Oz[Q.Ma] = "";
  Oz[Q.Ua] = "";
  Oz[Q.sa] = "auto";
  Oz[Q.pb] = "/";
  Oz[Q.Ea] = 63072e3;
  Oz[Q.Yc] = 30;
  Oz[Q.Pd] = 1e4;
  Oz[Q.Fa] = !0;
  var Pz = function (a, b, c, d, e, f) {
    f = void 0 === f ? !1 : f;
    Ip.call(this, a, b, d);
    this.o = c;
    this.V = d.eventModel;
    this.Kg = d.containerConfig;
    Lz || ((this.I = d.getWithConfig(Q.ra) ? 1 : 8), (this.Tg = this.mc = !1));
    Lz || (this.jf = d.getWithConfig(Q.qb) ? 1 : 8);
    this.C = e;
    this.R = this.ef = this.$g = this.s = this.Wg = !1;
    this.Qb = 0;
    this.lf = this.Ab = !1;
    this.Td = void 0;
    this.cb = 0;
    this.Zg = this.g = this.kf = this.Ng = void 0;
    Nz || (this.Xg = !1);
    Mz || (this.Lg = this.Pg = void 0);
    this.Zi = f;
  };
  la(Pz, Ip);
  l = Pz.prototype;
  l.Wa = function (a, b) {
    void 0 === this.B(a) && (this.V[a] = b);
  };
  l.B = function (a) {
    return void 0 !== this.V[a]
      ? this.V[a]
      : void 0 !== this.D.getWithConfig(a)
      ? this.D.getWithConfig(a)
      : void 0 !== this.C[a]
      ? this.C[a]
      : Oz[a];
  };
  l.getRemoteConfig = function (a) {
    return void 0 !== this.D.remoteConfig[a]
      ? this.D.remoteConfig[a]
      : this.C[a];
  };
  l.Pb = function (a) {
    var b = Kp(this, Q.Jd, this.C[Q.Jd]);
    if (b && void 0 !== b[a || this.eventName]) return b[a || this.eventName];
  };
  l.sh = function () {
    var a;
    a = Lz ? this.metadata.user_data : this.B(Q.Ga);
    if ("object" === typeof a) return a;
  };
  l.uh = function () {
    return !!this.sh();
  };
  l.abort = function () {
    throw "ABORT";
  };
  l.Ja = function () {
    return !((!0 !== this.B(Q.Sc) && "true" !== this.B(Q.Sc)) || !this.B(Q.ba));
  };
  var Qz = !1,
    Rz = function (a) {
      var b = a.eventName === Q.Ic && yg() && a.Ja(),
        c = a.metadata.is_conversion || a.Ab,
        d = a.metadata.is_session_start || a.s,
        e = a.metadata.create_dc_join || a.ef,
        f = a.metadata.create_google_join || a.R,
        g = (a.g || a.metadata.euid_mode_enabled) && a.uh();
      return !(!Fb.sendBeacon || c || g || d || e || f || b || Qz);
    };
  var Sz = !1;
  Sz = !0;
  var Tz = function (a) {
    gg("GA4_EVENT", a);
  };
  var Vz = function (a) {
      return !a || Uz.test(a) || Q.Li.hasOwnProperty(a);
    },
    Wz = function (a, b, c) {
      for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
        var f = d[e];
        if (f.edit_param) {
          var g = f.edit_param.param_name,
            h = dx(a, b, f.edit_param.param_value),
            k;
          if (h) {
            var n = Number(h);
            k = isNaN(n) ? h : n;
          } else k = h;
          b[g] = k;
        } else f.delete_param && delete b[f.delete_param.param_name];
      }
    },
    Uz = /^(_|ga_|google_|gtag\.|firebase_).*$/;
  var Xz = function (a) {
      var b = 0,
        c = 0;
      return {
        start: function () {
          b = Ta();
        },
        stop: function () {
          c = this.get();
        },
        get: function () {
          var d = 0;
          a.Kf() && (d = Ta() - b);
          return d + c;
        },
      };
    },
    Yz = !1;
  var Zz = function () {
    this.g = void 0;
    this.o = 0;
    this.isActive = this.isVisible = this.s = !1;
    this.I = this.C = void 0;
  };
  l = Zz.prototype;
  l.Ni = function (a) {
    var b = this;
    if (!this.g) {
      this.s = J.hasFocus();
      this.isVisible = !J.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        Qb(d, e, function (g) {
          b.g.stop();
          f(g);
          b.Kf() && b.g.start();
        });
      };
      c(z, "focus", function () {
        b.s = !0;
      });
      c(z, "blur", function () {
        b.s = !1;
      });
      c(z, "pageshow", function (d) {
        b.isActive = !0;
        d.persisted && jg(56);
        b.I && b.I();
      });
      c(z, "pagehide", function () {
        b.isActive = !1;
        b.C && b.C();
      });
      c(J, "visibilitychange", function () {
        b.isVisible = !J.hidden;
      });
      a.Ja() &&
        -1 === (Fb.userAgent || "").indexOf("Firefox") &&
        -1 === (Fb.userAgent || "").indexOf("FxiOS") &&
        c(z, "beforeunload", function () {
          Qz = !0;
        });
      this.Wf();
      this.o = 0;
    }
  };
  l.Wf = function () {
    this.o += this.pe();
    this.g = Xz(this);
    this.Kf() && this.g.start();
  };
  l.Gk = function (a) {
    var b = this.pe();
    a.cb = b;
  };
  l.Hj = function (a) {
    Yz ? (a.F[Q.Id] = void 0) : (a.cb = 0);
    this.Wf();
    this.o = 0;
  };
  l.Kf = function () {
    return this.s && this.isVisible && this.isActive;
  };
  l.Ej = function () {
    return this.o + this.pe();
  };
  l.pe = function () {
    return (this.g && this.g.get()) || 0;
  };
  l.pk = function (a) {
    this.C = a;
  };
  l.Jh = function (a) {
    this.I = a;
  };
  function $z() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var aA = function () {
      var a = $z();
      a.hid = a.hid || Ha();
      return a.hid;
    },
    bA = function (a, b) {
      var c = $z();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var dA = function (a, b, c) {
      if (cA) {
        var d = a.metadata.client_id_source;
        if (void 0 === d || c <= d)
          (a.F[Q.ra] = b),
            (a.V[Q.ra] = void 0),
            (a.metadata.client_id_source = c);
      } else c <= a.I && ((a.V[Q.ra] = b), (a.I = c));
    },
    hA = function (a, b) {
      var c;
      var d = eA(b),
        e = String(b.B(Q.sa)),
        f = String(b.B(Q.pb)),
        g = Number(b.B(Q.Ea)),
        h = b.B(Q.cc),
        k = {
          lb: Q.T,
          domain: e,
          path: f,
          expires: g ? new Date(Ta() + 1e3 * g) : void 0,
          flags: "" + b.B(Q.Ua),
        };
      if (!1 === h && fA(b) === a) c = !0;
      else {
        var n = ej(a, gA[0], e, f);
        c = 1 !== Xi(d, n, k);
      }
      return c;
    },
    fA = function (a) {
      var b = eA(a),
        c = "" + a.B(Q.sa),
        d = "" + a.B(Q.pb),
        e = dj(b, c, d, gA, Q.T);
      if (!e) {
        var f = String(a.B(Q.bc));
        f && f != b && (e = dj(f, c, d, gA, Q.T));
      }
      return e;
    },
    eA = function (a) {
      return String(a.B(Q.Ma)) + "_ga";
    },
    cA = !1;
  var gA = ["GA1"];
  var kA = function (a, b) {
      var c = iA(b),
        d = String(b.B(Q.sa)),
        e = String(b.B(Q.pb)),
        f = Number(b.B(Q.Ea)),
        g = ej(a, jA[0], d, e),
        h = {
          lb: Q.T,
          domain: d,
          path: e,
          expires: f ? new Date(Ta() + 1e3 * f) : void 0,
          flags: String(b.B(Q.Ua)),
        };
      return 1 !== Xi(c, g, h);
    },
    lA = function (a) {
      var b = iA(a),
        c = String(a.B(Q.sa)),
        d = String(a.B(Q.pb));
      return dj(b, c, d, jA, Q.T);
    },
    mA = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var h = [a, b, Na(c), d, e];
        return h.join(".");
      }
    },
    nA = !1;
  var jA = ["GS1"],
    iA = function (a) {
      return String(a.B(Q.Ma)) + "_ga_" + a.xa.substr(2);
    },
    oA = function (a) {
      return nA
        ? mA(
            a.F[Q.Hb],
            a.F[Q.$c],
            a.F[Q.Zc],
            a.o,
            a.metadata.join_timer_sec || 0,
            !!a.metadata[Q.Rc],
            a.F[Q.qb]
          )
        : mA(
            a.V[Q.Hb],
            a.V[Q.$c],
            a.V[Q.Zc],
            a.o,
            a.Qb,
            !!a.V[Q.Rc],
            a.V[Q.qb]
          );
    };
  var pA = function (a) {
      var b = a.B(Q.va),
        c = a.getRemoteConfig(Q.va);
      if (c === b) return c;
      var d = oc(b);
      c && c[Q.U] && (d[Q.U] = (d[Q.U] || []).concat(c[Q.U]));
      return d;
    },
    qA = function (a, b) {
      var c = Mj(!0);
      return "1" !== c._up ? {} : { clientId: c[a], Mh: c[b] };
    },
    rA = function (a, b, c) {
      var d = Mj(!0),
        e = d[b];
      e && (dA(a, e, 2), hA(e, a));
      var f = d[c];
      f && kA(f, a);
      return !(!e || !f);
    },
    sA = !1;
  var tA = !1;
  tA = !0;
  var uA = !1,
    vA = function (a) {
      var b = pA(a) || {},
        c = eA(a),
        d = iA(a);
      Vj(b[Q.hc], !!b[Q.U]) && rA(a, c, d) && (uA = !0);
      b[Q.U] &&
        Sj(
          function () {
            var e = {},
              f = fA(a);
            f && (e[c] = f);
            var g = lA(a);
            g && (e[d] = g);
            var h = Oi("FPLC", void 0, void 0, Q.T);
            h.length && (e._fplc = h[0]);
            return e;
          },
          b[Q.U],
          b[Q.Vc],
          !!b[Q.ic]
        );
    },
    xA = function (a) {
      if (!a.B(Q.vb)) return {};
      var b = eA(a),
        c = iA(a);
      Tj(function () {
        var d;
        if (Lg("analytics_storage")) d = {};
        else {
          var e = {};
          d =
            ((e._up = "1"),
            (e[b] = sA ? a.F[Q.ra] : a.V[Q.ra]),
            (e[c] = oA(a)),
            e);
        }
        return d;
      }, 1);
      return !Lg("analytics_storage") && wA() ? qA(b, c) : {};
    },
    wA = function () {
      var a = hi(z.location, "host"),
        b = hi(ki(J.referrer), "host");
      return a && b
        ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a)
          ? !0
          : !1
        : !1;
    },
    yA = function (a) {
      if (!a) return a;
      var b = String(a);
      b = Lj(b);
      return (b = Lj(b, "_ga"));
    };
  var zA = !1;
  zA = !0;
  var AA = function (a) {
    var b = !1;
    return b;
  };
  var BA = function () {
    var a = Ta(),
      b = a + 864e5,
      c = 20,
      d = 5e3;
    return function () {
      var e = Ta();
      e >= b && ((b = e + 864e5), (d = 5e3));
      if (1 > d) return !1;
      c = Math.min(c + ((e - a) / 1e3) * 5, 20);
      a = e;
      if (1 > c) return !1;
      d--;
      c--;
      return !0;
    };
  };
  var DA = function (a) {
      var b;
      b = CA ? a.F[Q.Va] : a.B(Q.Va);
      return ii(ki(b), "host", !0);
    },
    EA = !1;
  EA = !0;
  var CA = !1;
  CA = !0;
  var FA = !1;
  FA = !0;
  var GA = "" + Ha(),
    HA = !1,
    IA = void 0;
  var JA = function () {
    if (Ca(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var KA = function (a, b) {
      if (b.Ja()) {
        var c = JA();
        c && (a.us_privacy = c);
        var d = lo();
        d && (a.gdpr = d);
        var e = ko();
        e && (a.gdpr_consent = e);
      }
    },
    MA = function (a, b) {
      if (yg()) {
        a.gcs = Mg();
        var c = LA ? b.metadata.is_consent_update : b.Pg;
        c && (a.gcu = "1");
        if (b.Ja()) {
          zg() && (a.gcd = "G1" + Gg(wg));
          var d = b.B(Q.ka);
          a.adr = void 0 !== d && !1 !== d ? "1" : "0";
          if (c) {
            var e;
            LA ? (e = b.metadata.consent_update_type) : (e = b.Lg);
            a.gcut = Q.De[e || ""];
          }
        }
      }
    },
    NA = function (a, b, c) {
      void 0 === c && (c = {});
      if ("object" === typeof b) for (var d in b) NA(a + "." + d, b[d], c);
      else c[a] = b;
      return c;
    },
    QA = function (a) {
      var b = kn(a.B(Q.ba), "/g/collect");
      if (b) return b;
      var c = Kp(a, Q.sb, a.B(Q.sb));
      return c &&
        !Kp(a, Q.Tc, !1) &&
        !1 !== a.B(Q.Jc) &&
        bq() &&
        Lg(Q.H) &&
        Lg(Q.T)
        ? OA()
        : PA();
    },
    RA = !1;
  var SA = !1;
  SA = !0;
  var TA = !1;
  TA = !0;
  var UA = !1;
  UA = !0;
  var LA = !1;
  var VA = !1;
  VA = !0;
  var WA = "",
    XA = !1;
  var YA = {};
  YA[Q.Ji] = "tid";
  YA[Q.ra] = "cid";
  YA[Q.tb] = "ul";
  YA[Q.Ve] = "_fid";
  YA[Q.Rd] = "tt";
  YA[Q.Uc] = "ir";
  YA[Q.af] = "sr";
  YA[Q.qg] = "gdid";
  (YA[Q.$e] = "_rdi"), (YA[Q.pg] = "_geo");
  YA[Q.Ig] = "_glv";
  var ZA = {};
  ZA[Q.Hb] = "sid";
  ZA[Q.$c] = "sct";
  ZA[Q.Zc] = "seg";
  ZA[Q.hb] = "dl";
  ZA[Q.Va] = "dr";
  ZA[Q.Wc] = "dt";
  ZA[Q.ma] = "cu";
  ZA[Q.Na] = "uid";
  (ZA[Q.Kc] = "cc"),
    (ZA[Q.Lc] = "ci"),
    (ZA[Q.Mc] = "cm"),
    (ZA[Q.Nc] = "cn"),
    (ZA[Q.Oc] = "cs"),
    (ZA[Q.Pc] = "ck");
  var $A = {};
  $A[Q.og] = "edid";
  var aB = {};
  aB[Q.Kc] = "cc";
  aB[Q.Lc] = "ci";
  aB[Q.Mc] = "cm";
  aB[Q.Nc] = "cn";
  aB[Q.Oc] = "cs";
  aB[Q.Pc] = "ck";
  var PA = function () {
      var a = "www";
      XA && WA && (a = WA);
      return "https://" + a + ".google-analytics.com/g/collect";
    },
    OA = function () {
      var a;
      XA && WA && (a = WA);
      return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect";
    },
    bB = function (a, b, c) {
      function d(C, D) {
        if (void 0 !== D && !Q.Fg.hasOwnProperty(C)) {
          null === D && (D = "");
          var P = D;
          !0 === D && (P = "1");
          !1 === D && (P = "0");
          var H;
          if (YA[C]) (H = YA[C]), (e[H] = Te(P, 420));
          else if (ZA[C]) (H = ZA[C]), (g[H] = Te(P, 420));
          else if ($A[C]) (H = $A[C]), (f[H] = Te(P, 420));
          else if ("_" === C.charAt(0)) e[C] = Te(P, 420);
          else {
            var L;
            (L = v(C, D)) ||
              (aB[C]
                ? (L = !0)
                : C !== Q.eb
                ? (L = !1)
                : ("object" !== typeof D && t(C, D), (L = !0)));
            L || t(C, D);
          }
        }
      }
      var e = {},
        f = {},
        g = {};
      e.v = "2";
      e.tid = a.xa;
      e.gtm = Mn();
      e._p = aA();
      a.Td && (e.sr = a.Td);
      a.kf && (e._z = a.kf);
      c && (e.em = c);
      if (RA ? a.metadata.create_google_join : a.R) e._gaz = 1;
      MA(e, a);
      KA(e, a);
      a.Zg && !RA && (e.gtm_up = "1");
      a.Ja() && a.Xg && !VA && (e._glv = "1");
      var h = void 0;
      SA ? (h = a.F[Q.Ok]) : (h = bb(a.D.getMergedValues(Q.aa, 1), "."));
      h && (e.gdid = h);
      f.en = Te(a.eventName, 40);
      var k = RA ? a.metadata.is_first_visit_conversion : a.Wg;
      RA
        ? a.metadata.is_first_visit && (f._fv = k ? 2 : 1)
        : a.mc && (f._fv = k ? 2 : 1);
      RA ? a.metadata.is_new_to_site && (f._nsi = 1) : a.Tg && (f._nsi = 1);
      var n = RA ? a.metadata.is_session_start_conversion : a.$g;
      RA
        ? a.metadata.is_session_start && (f._ss = n ? 2 : 1)
        : a.s && (f._ss = n ? 2 : 1);
      RA ? a.metadata.is_conversion && (f._c = 1) : a.Ab && (f._c = 1);
      0 < a.cb && !RA && (f._et = a.cb);
      if (a.metadata.is_ecommerce || a.lf) {
        var p = a.F[Q.fa] || a.B(Q.fa);
        if (Ea(p))
          for (var q = 0; q < p.length && 200 > q; q++)
            f["pr" + (q + 1)] = Ye(p[q]);
      }
      var r = TA ? a.metadata.event_usage : a.Ng;
      r && (f._eu = r);
      var u = void 0;
      SA ? (u = a.F[Q.Nk]) : (u = bb(a.D.getMergedValues(Q.aa, 2), "."));
      u && (f.edid = u);
      for (
        var t = function (C, D) {
            C = Te(C, 40);
            var F = "ep." + C,
              P = "epn." + C;
            C = Da(D) ? P : F;
            var H = Da(D) ? F : P;
            f.hasOwnProperty(H) && delete f[H];
            f[C] = Te(D, 100);
          },
          v = function (C, D) {
            var F = C.split(".");
            if (C === Q.Ga && "object" !== typeof D) return t(C, D), !0;
            if (F[0] === Q.Ga) {
              if ((1 < F.length || "object" === typeof D) && a.Ja()) {
                var P = NA(C, D);
                La(P, function (H, L) {
                  return void t(H, L);
                });
              }
              return !0;
            }
            return !1;
          },
          x = 0;
        x < Q.Eg.length;
        ++x
      ) {
        var y = Q.Eg[x];
        d(y, a.B(y));
      }
      a.lf && d(Q.ma, a.B(Q.ma));
      La(a.Kg, d);
      La(a.V, d);
      La(a.F, d);
      if (!UA) {
        var w = a.D.getKeysFromFirstOfAnyScope([
            Q.eb,
            Q.Kc,
            Q.Lc,
            Q.Mc,
            Q.Nc,
            Q.Oc,
            Q.Pc,
          ]),
          A = function (C, D) {
            if (void 0 !== D) {
              null === D && (D = "");
              var F = aB[C];
              F && (g[F] = Te(D, 420));
            }
          };
        nc(w[Q.eb])
          ? La(w[Q.eb], function (C, D) {
              A((Q.eb + "_" + C).toLowerCase(), D);
            })
          : La(w, A);
      }
      var B = a.F[Q.Oa] || a.B(Q.Oa) || {};
      (!1 !== a.B(Q.da) && cq()) || (B._npa = "1");
      La(B, function (C, D) {
        if (void 0 !== D && (null === D && (D = ""), b[C] !== D)) {
          if (C !== Q.Na || g.uid) {
            var F = (Da(D) ? "upn." : "up.") + Te(C, 24);
            f[F] = Te(D, 36);
          } else g.uid = Te(D, 36);
          b[C] = D;
        }
      });
      var E = !1;
      return $e.call(this, { ya: e, Ub: g, V: f }, QA(a), a.Ja(), E) || this;
    };
  la(bB, $e);
  var cB = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    dB = function (a) {
      var b = a.search;
      return (
        a.protocol +
        "//" +
        a.hostname +
        a.pathname +
        (b ? b + "&richsstsse" : "?richsstsse")
      );
    },
    eB = function (a) {
      var b = {},
        c = "",
        d = a.pathname.indexOf("/g/collect");
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + "//" + a.hostname + c;
      return b;
    },
    fB = function (a, b) {
      var c = new z.XMLHttpRequest();
      c.withCredentials = !0;
      var d = b ? "POST" : "GET",
        e = "",
        f = 0,
        g = ki(a),
        h = eB(g),
        k = dB(g);
      c.onprogress = function (n) {
        if (200 === c.status) {
          e += c.responseText.substring(f);
          f = n.loaded;
          for (var p = cB(e, h), q = p.indexOf("\n\n"); -1 !== q; ) {
            var r;
            a: {
              var u = da(p.substring(0, q).split("\n")),
                t = u.next().value,
                v = u.next().value;
              if (t.startsWith("event: message") && v.startsWith("data: "))
                try {
                  r = JSON.parse(v.substring(v.indexOf(":") + 1));
                  break a;
                } catch (U) {}
              r = void 0;
            }
            var x = r;
            if (x) {
              var y = x.send_pixel || [];
              if (Array.isArray(y))
                for (var w = 0; w < y.length; w++) {
                  var A = y[w],
                    B = Nn("", 0);
                  if (1 === B) {
                    var E = Math.floor(2 * Math.random()) + 1,
                      C,
                      D = A,
                      F = E,
                      P = 0 < D.indexOf("?") ? "&" : "?";
                    C = "" + D + P + "gtmexpsb=" + F;
                    2 === E ? Wb(C) : Pb(C);
                  } else 2 === B ? Wb(A) : Pb(A);
                }
              var H = x.send_beacon || [];
              if (Array.isArray(H)) for (var L = 0; L < H.length; L++) Wb(H[L]);
            }
            p = p.substring(q + 2);
            q = p.indexOf("\n\n");
          }
          e = p;
        }
      };
      c.open(d, k);
      c.send(b);
    };
  var iB = function (a, b, c, d) {
      var e = a + "?" + b;
      gB && (d = !(0 === e.indexOf(PA()) || 0 === e.indexOf(OA())));
      d && !Qz ? fB(e, c) : hB(a, b, c);
    },
    jB = function (a) {},
    gB = !1;
  var kB = !1;
  var lB = function () {
    this.C = 1;
    this.I = {};
    this.g = new af();
    this.o = -1;
  };
  lB.prototype.s = function (a, b) {
    var c = this,
      d;
    try {
      d = new bB(a, this.I, b);
    } catch (v) {
      a.abort();
    }
    var e = Rz(a);
    (e && this.g.C(d)) || this.flush();
    if (e && this.g.add(d)) {
      if (0 > this.o) {
        var f = z,
          g = f.setTimeout,
          h;
        a.Ja() ? (mB ? ((mB = !1), (h = nB)) : (h = oB)) : (h = 5e3);
        this.o = g.call(
          f,
          function () {
            return c.flush();
          },
          h
        );
      }
    } else {
      var k = cf(d, this.C++);
      iB(d.g, k.Rf, k.body, d.C);
      var n = a.metadata.create_dc_join || a.ef,
        p = a.metadata.create_google_join || a.R,
        q = !1 !== a.B(Q.Ca),
        r = !1 !== a.B(Q.da),
        u = { eventId: a.D.eventId, priorityId: a.D.priorityId },
        t = {
          xk: n,
          yk: p,
          Gj: String(Kp(a, Q.Md, a.B(Q.Md))),
          rf: q,
          cj: r,
          Kj: Kp(a, Q.Tc, !1),
          Yk: u,
        };
      pB(d, t);
    }
  };
  lB.prototype.add = function (a) {
    (kB ? a.metadata.euid_mode_enabled : a.g) && !Qz ? this.R(a) : this.s(a);
  };
  lB.prototype.flush = function () {
    if (this.g.events.length) {
      var a = df(this.g, this.C++);
      iB(this.g.g, a.Rf, a.body, this.g.o);
      this.g = new af();
      0 <= this.o && (z.clearTimeout(this.o), (this.o = -1));
    }
  };
  lB.prototype.R = function (a) {
    var b = this,
      c = a.sh();
    c
      ? lh(c, function (d) {
          b.s(a, 1 === d.split("~").length ? void 0 : d);
        })
      : this.s(a);
  };
  var pB = function (a, b) {
      function c(r) {
        p.push(r + "=" + encodeURIComponent("" + a.ya[r]));
      }
      var d = b.xk,
        e = b.yk,
        f = b.Gj,
        g = b.rf,
        h = b.cj,
        k = b.Kj,
        n = b.zk;
      if (d || e || n) {
        var p = [];
        c("tid");
        c("cid");
        c("gtm");
        p.push("aip=1");
        a.Ub.uid && p.push("uid=" + encodeURIComponent("" + a.Ub.uid));
        d &&
          (hB(
            "https://stats.g.doubleclick.net/g/collect",
            "v=2&" + p.join("&")
          ),
          Fg("https://stats.g.doubleclick.net/g/collect?v=2&" + p.join("&")));
        if (e) {
          p.push("z=" + Ha());
          if (!k) {
            var q =
              f && 0 === f.indexOf("google.") && "google.com" != f
                ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace(
                    "%",
                    f
                  )
                : void 0;
            q && Pb(q + p.join("&"));
          }
        }
        n && jB(a);
      }
    },
    hB = function (a, b, c) {
      var d = a + "?" + b;
      c ? Fb.sendBeacon && Fb.sendBeacon(d, c) : Wb(d);
    },
    nB = Nn("", 500),
    oB = Nn("", 5e3),
    mB = !0;
  var qB = window,
    rB = document,
    sB = function (a) {
      var b = qB._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === qB["ga-disable-" + a]))
        return !0;
      try {
        var c = qB.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Ii("AMP_TOKEN", String(rB.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return rB.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var tB = {};
  var uB = function (a, b, c) {
      c || (c = function () {});
      var d = function (e) {
        void 0 !== e[b] && (e[b] = c(e[b]));
      };
      d(a.F);
      d(a.V);
      d(a.Kg);
      d(a.D.globalConfig);
    },
    vB = function () {
      var a = z.screen;
      return (a ? a.width : 0) + "x" + (a ? a.height : 0);
    },
    wB = function (a) {
      var b = Oi("_opt_expid", void 0, void 0, Q.T)[0];
      if (b) {
        var c = decodeURIComponent(b).split("$");
        if (3 === c.length) return c[2];
      }
      if (void 0 !== S.ga4_referrer_override) return S.ga4_referrer_override;
      var d = Mh("gtm.gtagReferrer." + a.xa);
      return d ? "" + d : J.referrer;
    },
    xB = function () {
      var a = "",
        b = J.location;
      if (b) {
        var c = b.pathname || "";
        "/" != c.charAt(0) && (c = "/" + c);
        a = b.protocol + "//" + b.hostname + c + b.search;
      }
      return a;
    },
    zB = function (a, b) {
      var c = Q.H;
      Lg(c) ||
        Og(function () {
          yB[11]
            ? ((b.metadata.is_consent_update = !0),
              (b.metadata.consent_update_type = c))
            : ((b.Pg = !0), (b.Lg = c));
          a.ah(b);
        }, c);
    },
    yB = {};
  yB[0] = !0;
  yB[2] = !0;
  yB[3] = !0;
  yB[5] = !0;
  yB[7] = !0;
  yB[6] = !0;
  yB[9] = !0;
  yB[10] = !0;
  yB[12] = !0;
  var AB = !1;
  tB.Ki = "";
  var BB = {},
    CB =
      ((BB[Q.Kc] = !0),
      (BB[Q.Lc] = !0),
      (BB[Q.Mc] = !0),
      (BB[Q.Nc] = !0),
      (BB[Q.Oc] = !0),
      (BB[Q.Pc] = !0),
      BB),
    DB = function (a, b) {
      this.cb = a;
      this.mc = b;
      this.R = new lB();
      this.g = void 0;
      this.C = new Zz();
      this.o = this.s = void 0;
      this.I = !1;
      this.Ab = void 0;
    };
  l = DB.prototype;
  l.ik = function (a, b, c) {
    var d = this,
      e = !1;
    if (c.eventModel[Q.Ib]) {
      e = !0;
      if ("_" === a.charAt(0)) return;
      a !== Q.La && a !== Q.Sa && Vz(a) && jg(58);
      EB(c);
    }
    var f = new Pz(this.cb, a, b, c, this.mc, e),
      g = [Q.T],
      h = !1;
    h = f.Ja();
    (Kp(f, Q.sb, f.B(Q.sb)) || h) && g.push(Q.H);
    Pg(function () {
      d.jk(f);
    }, g);
  };
  l.jk = function (a) {
    this.o = a;
    try {
      sB(a.xa) && (jg(28), a.abort());
      0 <= tB.Ki.replace(/\s+/g, "").split(",").indexOf(a.eventName) &&
        (jg(33), a.abort());
      var b = a.Pb();
      b && b.blacklisted && (jg(34), a.abort());
      var c = J.location.protocol;
      "http:" != c && "https:" != c && (jg(29), a.abort());
      Fb && "preview" == Fb.loadPurpose && (jg(30), a.abort());
      var d = S.grl;
      d || ((d = BA()), (S.grl = d));
      d() || (jg(35), a.abort());
      FB(a);
      this.Oi(a);
      this.C.Gk(a);
      var g = this.Hh,
        h;
      !a.B(Q.vb) ||
        Lg(Q.T) ||
        (sA ? a.D.getWithConfig(Q.ra) : 1 === a.I) ||
        (sA ? (a.F[Q.Jg] = !0) : (a.Zg = !0));
      var k;
      var n;
      n = void 0 === n ? 3 : n;
      var p = z.location.href;
      if (p) {
        var q = ki(p).search.replace("?", ""),
          r = fi(q, "_gl", !1, !0) || "";
        k = r ? void 0 !== Nj(r, n) : !1;
      } else k = !1;
      var u = k;
      tA ? u && a.Ja() && (a.F[Q.Ig] = !0) : (a.Xg = u);
      a.eventName === Q.La
        ? (a.B(Q.vb) && tk(["aw", "dc"]), vA(a), (h = xA(a)))
        : (h = {});
      g.call(this, h);
      a.eventName == Q.La &&
        (a.Zi &&
          0 < a.D.getEventModelKeys().length &&
          (jg(68), 1 < S.configCount && jg(69)),
        a.B(Q.Fa) || a.abort(),
        a.D.eventModel[Q.aa] &&
          ((a.D.containerConfig[Q.aa] = a.D.eventModel[Q.aa]),
          (a.D.eventModel[Q.aa] = void 0),
          yB[8] && (a.F[Q.aa] = void 0)),
        (a.eventName = Q.Ic));
      if (yB[3]) {
        var t = bb(a.D.getMergedValues(Q.aa, 1), ".");
        t && (a.F[Q.qg] = t);
        var v = bb(a.D.getMergedValues(Q.aa, 2), ".");
        v && (a.F[Q.og] = v);
      }
      var x = this.g,
        y = this.s,
        w = this.C,
        A = lA(a);
      A || (A = y);
      var B = Na(a.B(Q.Yc)),
        E;
      E = Na(a.B(Q.Pd));
      var C;
      a: {
        if (A) {
          var D = A.split(".");
          if (!(5 > D.length || 7 < D.length)) {
            C = {
              sessionId: D[0],
              we: Number(D[1]),
              wd: !!Number(D[2]),
              Lf: Number(D[3]),
              Qb: Number(D[4] || 0),
              Rb: "1" === D[5],
              me: "0" !== D[6] ? D[6] : void 0,
            };
            break a;
          }
        }
        C = void 0;
      }
      nA &&
        ((a.metadata.is_first_visit = !1),
        (a.metadata.is_session_start = !1),
        (a.metadata.join_timer_sec = 0));
      if (C && C.Qb) {
        var F = Math.max(0, C.Qb - Math.max(0, a.o - C.Lf));
        nA ? (a.metadata.join_timer_sec = F) : (a.Qb = F);
      }
      var P = !1;
      C ||
        (nA ? (a.metadata.is_first_visit = !0) : (a.mc = !0),
        (P = !0),
        (C = {
          sessionId: String(a.o),
          we: 1,
          wd: !1,
          Lf: a.o,
          Rb: !1,
          me: void 0,
        }));
      a.o > C.Lf + 60 * B &&
        ((P = !0),
        (C.sessionId = String(a.o)),
        C.we++,
        (C.wd = !1),
        (C.me = void 0));
      if (P) nA ? (a.metadata.is_session_start = !0) : (a.s = !0), w.Hj(a);
      else if (w.Ej() > E || a.eventName == Q.Ic) C.wd = !0;
      if (nA) {
        Jp(a, Q.Hb, C.sessionId);
        Jp(a, Q.$c, C.we);
        Jp(a, Q.Zc, C.wd ? 1 : 0);
      } else {
        a.Wa(Q.Hb, C.sessionId);
        a.Wa(Q.$c, C.we);
        a.Wa(Q.Zc, C.wd ? 1 : 0);
      }
      var T = a.B(Q.ra),
        qa;
      cA ? ((a.metadata.is_new_to_site = !1), (qa = T ? 1 : 8)) : (qa = a.I);
      T || ((T = fA(a)), (qa = 3));
      T || ((T = x), (qa = 5));
      if (!T) {
        var Fa = Lg(Q.T),
          Ba = $z();
        T = !Ba.from_cookie || Fa ? Ba.vid : void 0;
        qa = 6;
      }
      T
        ? (T = "" + T)
        : ((T = aj()),
          (qa = 7),
          cA
            ? (a.metadata.is_first_visit = a.metadata.is_new_to_site = !0)
            : (a.mc = a.Tg = !0));
      dA(a, T, qa);
      HB(a);
      a: {
        if (yB[0]) {
          Jp(a, Q.hb, xB());
          Jp(a, Q.Va, wB(a) || void 0);
          Jp(a, Q.Wc, J.title);
          Jp(a, Q.tb, (Fb.language || "").toLowerCase());
          Jp(a, Q.af, vB());
          break a;
        }
        a.Wa(Q.hb, xB());
        var Ia = wB(a);
        Ia && a.Wa(Q.Va, Ia);
        a.Wa(Q.Wc, J.title);
        a.Wa(Q.tb, (Fb.language || "").toLowerCase());
        a.Td = vB();
      }
      yB[1] &&
        ((a.metadata.create_dc_join = !1),
        (a.metadata.create_google_join = !1));
      if (!1 !== a.B(Q.Jc) && bq() && Lg(Q.H)) {
        var Qa = Kp(a, Q.sb, a.B(Q.sb));
        if ((yB[1] ? a.metadata.is_session_start : a.s) || a.B(Q.We)) {
          yB[1] ? (a.metadata.create_dc_join = !!Qa) : (a.ef = !!Qa);
        }
        var Bc;
        yB[1] ? (Bc = a.metadata.join_timer_sec) : (Bc = a.Qb);
        Qa &&
          0 === (Bc || 0) &&
          (yB[1]
            ? ((a.metadata.join_timer_sec = 60),
              (a.metadata.create_google_join = !0))
            : ((a.Qb = 60), (a.R = !0)));
      }
      IB(a);
      var cd = Q.Gg.hasOwnProperty(a.eventName);
      yB[2]
        ? cd && ((a.metadata.is_ecommerce = !0), Jp(a, Q.fa), Jp(a, Q.ma))
        : (a.lf = cd);
      yB[6] && Jp(a, Q.Rd);
      for (var oe = a.B(Q.Xe) || [], il = 0; il < oe.length; il++) {
        var jl = oe[il];
        if (jl.rule_result) {
          yB[6] ? Jp(a, Q.Rd, jl.traffic_type) : a.Wa(Q.Rd, jl.traffic_type);
          Tz(3);
          break;
        }
      }
      if (a.B(Q.ba)) {
        var ot = pA(a) || {},
          pt =
            (Vj(ot[Q.hc], !!ot[Q.U]) ? Mj(!0)._fplc : void 0) ||
            (0 < Oi("FPLC", void 0, void 0, Q.T).length ? void 0 : "0");
        zA ? (a.F._fplc = pt) : (a.V._fplc = pt);
      }
      if (void 0 !== a.B(Q.Uc)) EA && Jp(a, Q.Uc);
      else {
        var qt = a.B(Q.Od),
          kl,
          zh;
        a: {
          if (uA) {
            var ll = pA(a) || {};
            if (ll && ll[Q.U])
              for (var rt = DA(a), Ah = ll[Q.U], wf = 0; wf < Ah.length; wf++)
                if (Ah[wf] instanceof RegExp) {
                  if (Ah[wf].test(rt)) {
                    zh = !0;
                    break a;
                  }
                } else if (0 <= rt.indexOf(Ah[wf])) {
                  zh = !0;
                  break a;
                }
          }
          zh = !1;
        }
        var Bh;
        if (!(Bh = zh))
          if (FA) Bh = !1;
          else {
            var NB = DA(a),
              Ch;
            var ml = String(a.B(Q.sa));
            if ("none" !== ml)
              if ("auto" !== ml) Ch = ml;
              else {
                if (!HA) {
                  for (
                    var st = String(a.B(Q.pb)), xf = Ui(), pe = 0;
                    pe < xf.length;
                    pe++
                  )
                    if ("none" !== xf[pe]) {
                      var tt = String(a.B(Q.Ma)) + "_ga_autodomain";
                      if (
                        0 === Xi(tt, GA, { lb: Q.T, domain: xf[pe], path: st })
                      ) {
                        Xi(tt, void 0, { lb: Q.T, domain: xf[pe], path: st });
                        IA = xf[pe];
                        break;
                      }
                    }
                  HA = !0;
                }
                Ch = IA;
              }
            else Ch = void 0;
            var ut = Ch;
            Bh = ut ? 0 <= NB.indexOf(ut) : !1;
          }
        if (!(kl = Bh)) {
          var Dh;
          if ((Dh = qt))
            a: {
              for (
                var vt = qt.include_conditions || [], OB = DA(a), nl = 0;
                nl < vt.length;
                nl++
              )
                if (vt[nl].test(OB)) {
                  Dh = !0;
                  break a;
                }
              Dh = !1;
            }
          kl = Dh;
        }
        kl && (EA ? (a.F[Q.Uc] = "1") : a.Wa(Q.Uc, 1), Tz(4));
      }
      if (a.Ja() && yg()) {
      }
      if (a.eventName == Q.Sa) {
        var wt = a.B(Q.fb),
          PB = a.B(Q.rb),
          xt = void 0;
        xt = a.F[wt];
        PB(xt || a.B(wt));
        a.abort();
      }
      if (a.V[Q.oc]) delete a.V[Q.oc];
      else {
        var ol = a.B(Q.Qe);
        if (ol) {
          var Xb = oc(a.V);
          oc(a.F, Xb);
          for (
            var yt = ol.edit_rules || [], zt = !1, pl = 0;
            pl < yt.length;
            pl++
          ) {
            var Eh;
            a: {
              var zd = a,
                Ad = yt[pl];
              if (
                gx(
                  zd.eventName,
                  Xb,
                  Ad.event_name_predicate,
                  Ad.conditions || []
                )
              ) {
                if (Ad.new_event_name) {
                  var At = m(Ad.new_event_name)
                    ? String(Ad.new_event_name)
                    : dx(zd.eventName, Xb, Ad.new_event_name);
                  if (Vz(At)) {
                    Eh = !1;
                    break a;
                  }
                  zd.eventName = String(At);
                }
                Wz(zd.eventName, Xb, Ad);
                var Bt = (Xb[Q.oc] = !0);
                Bt = !1;
                Tz(2);
                if (Bt) {
                  var Ct = ig();
                  Ct && (Xb[Q.kc] = Ct);
                  br(zd.eventName, Xb, zd.xa);
                  zd.abort();
                }
                Eh = !0;
              } else Eh = !1;
            }
            Eh && (zt = !0);
          }
          for (
            var Dt = ol.synthesis_rules || [], ql = 0;
            ql < Dt.length;
            ql++
          ) {
            var Et = a,
              yf = Dt[ql];
            if (
              gx(Et.eventName, Xb, yf.event_name_predicate, yf.conditions || [])
            ) {
              var rl = yf.new_event_name;
              if (!Vz(rl)) {
                var sl = yf.merge_source_event_params ? oc(Xb) : {};
                sl[Q.oc] = !0;
                Wz(rl, sl, yf);
                br(rl, sl, Et.xa);
                Tz(1);
              }
            }
          }
          if (zt) {
            var Ft = ig();
            Ft && (Xb[Q.kc] = Ft);
            br(a.eventName, Xb, a.xa);
            a.abort();
          }
        }
      }
      Np(a);
      var tl = a.V[Q.kc];
      if (Ea(tl)) for (var ul = 0; ul < tl.length; ul++) Tz(tl[ul]);
      var vl = hg("GA4_EVENT");
      vl && (Sz ? (a.metadata.event_usage = vl) : (a.Ng = vl));
      JB(a);
      var RB = this.Hh,
        Gt = this.g,
        wl;
      var xl = oA(a);
      xl ? (kA(xl, a) || (jg(25), a.abort()), (wl = xl)) : (wl = void 0);
      var SB = wl,
        Fh;
      var Cc;
      Cc = cA ? a.F[Q.ra] : a.V[Q.ra];
      Gt && Cc === Gt
        ? (Fh = Cc)
        : Cc
        ? ((Cc = "" + Cc),
          hA(Cc, a) || (jg(31), a.abort()),
          bA(Cc, Lg(Q.T)),
          (Fh = Cc))
        : (jg(32), a.abort(), (Fh = ""));
      RB.call(this, { clientId: Fh, Mh: SB });
      this.Ek();
      if (a.Ja()) {
        var TB = yB[1] ? a.metadata.is_conversion : a.Ab;
        ("page_view" === a.eventName || TB) && zB(this, a);
      }
      this.C.Wf();
      this.Ab = KB(a, this.Ab);
      a.B(Q.$e) && ((a.F[Q.$e] = !0), uB(a, Q.af), (a.Td = void 0)),
        Jp(a, Q.pg);
      this.ah(a);
      a.D.onSuccess();
    } catch (ZB) {
      a.D.onFailure();
    }
    delete fg.GA4_EVENT;
  };
  l.ah = function (a) {
    this.R.add(a);
  };
  l.Hh = function (a) {
    var b = a.clientId,
      c = a.Mh;
    b && c && ((this.g = b), (this.s = c));
  };
  l.flush = function () {
    this.R.flush();
  };
  l.Ek = function () {
    var a = this;
    if (!this.I) {
      var b = Lg(Q.T);
      Ng([Q.T], function () {
        var c = Lg(Q.T);
        if (b ^ c && a.o && a.s && a.g) {
          var d = a.g;
          if (c) {
            var e = !0;
            e = !1;
            var f = fA(a.o);
            if (f) {
              a.g = f;
              var g = lA(a.o);
              e || g ? (a.s = g) : kA(a.s, a.o);
            } else hA(a.g, a.o), bA(a.g, !0), kA(a.s, a.o);
            var h = {};
            h[Q.We] = d;
            ar(Q.He, h, a.cb);
          } else {
            a.s = void 0;
            a.g = void 0;
            z.gaGlobal = {};
          }
          b = c;
        }
      });
      this.I = !0;
    }
  };
  l.Oi = function (a) {
    a.eventName !== Q.Sa && this.C.Ni(a);
  };
  var GB = function (a) {
      if (a.B(Q.Ag)) (a.g = !1), (a.metadata.euid_mode_enabled = !1);
      else {
        var b = function (c) {
          return (
            !!c &&
            ("auto_detect" === c.mode ||
              "selectors" === c.mode ||
              "code" === c.mode)
          );
        };
        yB[1]
          ? (a.metadata.euid_mode_enabled = b(a.getRemoteConfig(Q.jc)))
          : (a.g = b(a.getRemoteConfig(Q.jc)));
      }
    },
    FB = function (a) {},
    HB = function (a) {
      if (yB[9]) {
        var b = a.D.getKeysFromFirstOfAnyScope([
            Q.eb,
            Q.Kc,
            Q.Lc,
            Q.Mc,
            Q.Nc,
            Q.Oc,
            Q.Pc,
          ]),
          c = function (d, e) {
            CB[d] && (a.F[d] = e);
          };
        nc(b[Q.eb])
          ? La(b[Q.eb], function (d, e) {
              c((Q.eb + "_" + d).toLowerCase(), e);
            })
          : La(b, c);
      }
    },
    IB = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      yB[1] ? (a.metadata.is_conversion = b(a.Pb())) : (a.Ab = b(a.Pb()));
      if (yB[1] ? a.metadata.is_first_visit : a.mc)
        yB[1]
          ? (a.metadata.is_first_visit_conversion = b(a.Pb("first_visit")))
          : (a.Wg = b(a.Pb("first_visit")));
      if (yB[1] ? a.metadata.is_session_start : a.s)
        yB[1]
          ? (a.metadata.is_session_start_conversion = b(a.Pb("session_start")))
          : (a.$g = b(a.Pb("session_start")));
    },
    JB = function (a) {
      var b = Object.keys(yB);
      if (b.length) {
        b.forEach(function (d) {
          yB[d] && gg("CCD", Number(d));
        });
        var c = hg("CCD");
        c && (a.kf = "ccd." + c);
      }
    },
    KB = function (a, b) {
      var c = void 0;
      return c;
    };
  function EB(a) {
    delete a.eventModel[Q.Ib];
    LB(a.eventModel);
  }
  var LB = function (a) {
    La(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[Q.Oa] || {};
    La(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var MB = function (a) {
      if ("prerender" == J.visibilityState) return !1;
      a();
      return !0;
    },
    QB = function (a) {
      if (!MB(a)) {
        var b = !1,
          c = function () {
            !b && MB(a) && ((b = !0), Rb(J, "visibilitychange", c), jg(55));
          };
        Qb(J, "visibilitychange", c);
        jg(54);
      }
    };
  var UB = function (a, b, c) {
      ar(b, c, a);
    },
    VB = function (a, b, c) {
      ar(b, c, a, !0);
    },
    XB = function (a, b) {
      var c = new DB(a, b);
      QB(function () {
        WB(a, c);
      });
    };
  function WB(a, b) {
    var c = b.C;
    $q(a, function (d, e, f, g) {
      b.ik(e, f, g);
    });
    c.pk(function () {
      Yq().flush();
      1e3 <= c.pe() && Fb.sendBeacon && UB(a, Q.He, {});
      Qz = !0;
      b.flush();
      c.Jh(function () {
        Qz = !1;
        c.Jh();
      });
    });
  }
  var Y = { h: {} };

  (Y.h.read_container_data = ["google"]),
    (function () {
      (function (a) {
        Y.__read_container_data = a;
        Y.__read_container_data.m = "read_container_data";
        Y.__read_container_data.isVendorTemplate = !0;
        Y.__read_container_data.priorityOverride = 0;
      })(function () {
        return {
          assert: function () {},
          W: function () {
            return {};
          },
        };
      });
    })();
  (Y.h.c = ["google"]),
    (function () {
      (function (a) {
        Y.__c = a;
        Y.__c.m = "c";
        Y.__c.isVendorTemplate = !0;
        Y.__c.priorityOverride = 0;
      })(function (a) {
        lu(a.vtp_value, "c", a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (Y.h.e = ["google"]),
    (function () {
      (function (a) {
        Y.__e = a;
        Y.__e.m = "e";
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Y.h.listen_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { eventName: c };
      }
      (function (b) {
        Y.__listen_data_layer = b;
        Y.__listen_data_layer.m = "listen_data_layer";
        Y.__listen_data_layer.isVendorTemplate = !0;
        Y.__listen_data_layer.priorityOverride = 0;
      })(function (b) {
        var c = b.vtp_accessType,
          d = b.vtp_allowedEvents || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!m(g))
              throw e(f, { eventName: g }, "Event name must be a string.");
            if (!("any" === c || ("specific" === c && 0 <= d.indexOf(g))))
              throw e(
                f,
                { eventName: g },
                "Prohibited listen on data layer event."
              );
          },
          W: a,
        };
      });
    })();

  (Y.h.v = ["google"]),
    (function () {
      (function (a) {
        Y.__v = a;
        Y.__v.m = "v";
        Y.__v.isVendorTemplate = !0;
        Y.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = du(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        lu(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();
  (Y.h.get_url = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Y.__get_url = b;
        Y.__get_url.m = "get_url";
        Y.__get_url.isVendorTemplate = !0;
        Y.__get_url.priorityOverride = 0;
      })(function (b) {
        var c = "any" === b.vtp_urlParts ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"),
          b.vtp_fragment && c.push("fragment"));
        var d =
            c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, h) {
            if (g) {
              if (!m(g)) throw e(f, {}, "URL component must be a string.");
              if (c && 0 > c.indexOf(g))
                throw e(f, {}, "Prohibited URL component: " + g);
              if ("query" === g && d) {
                if (!h)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!m(h)) throw e(f, {}, "Query key must be a string.");
                if (0 > d.indexOf(h))
                  throw e(f, {}, "Prohibited query key: " + h);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          W: a,
        };
      });
    })();

  (Y.h.process_dom_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { targetType: c, eventName: d };
      }
      (function (b) {
        Y.__process_dom_events = b;
        Y.__process_dom_events.m = "process_dom_events";
        Y.__process_dom_events.isVendorTemplate = !0;
        Y.__process_dom_events.priorityOverride = 0;
      })(function (b) {
        for (
          var c = b.vtp_targets || [],
            d = b.vtp_createPermissionError,
            e = {},
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          e[g.targetType] = e[g.targetType] || [];
          e[g.targetType].push(g.eventName);
        }
        return {
          assert: function (h, k, n) {
            if (!e[k]) throw d(h, {}, "Prohibited event target " + k + ".");
            if (-1 === e[k].indexOf(n))
              throw d(
                h,
                {},
                "Prohibited listener registration for DOM event " + n + "."
              );
          },
          W: a,
        };
      });
    })();

  (Y.h.gct = ["google"]),
    (function () {
      function a(e) {
        for (var f = [], g = 0; g < e.length; g++)
          try {
            f.push(new RegExp(e[g]));
          } catch (h) {}
        return f;
      }
      function b(e) {
        return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
      }
      function c(e) {
        for (var f = [], g = 0; g < e.length; g++) {
          var h = e[g].matchValue,
            k;
          switch (e[g].matchType) {
            case "BEGINS_WITH":
              k = "^" + b(h);
              break;
            case "ENDS_WITH":
              k = b(h) + "$";
              break;
            case "EQUALS":
              k = "^" + b(h) + "$";
              break;
            case "REGEX":
              k = h;
              break;
            default:
              k = b(h);
          }
          f.push(k);
        }
        return f;
      }
      var d = !1;
      (function (e) {
        Y.__gct = e;
        Y.__gct.m = "gct";
        Y.__gct.isVendorTemplate = !0;
        Y.__gct.priorityOverride = 0;
      })(function (e) {
        var f = {},
          g = e.vtp_sessionDuration;
        0 < g && (f[Q.Yc] = g);
        f[Q.Jd] = e.vtp_eventSettings;
        f[Q.Qe] = e.vtp_dynamicEventSettings;
        f[Q.sb] = 1 === e.vtp_googleSignals;
        f[Q.Md] = e.vtp_foreignTld;
        f[Q.Tc] = 1 === e.vtp_restrictDomain;
        f[Q.Xe] = e.vtp_internalTrafficResults;
        var h = Q.va,
          k = e.vtp_linker;
        k && k[Q.U] && (k[Q.U] = a(k[Q.U]));
        f[h] = k;
        var n = Q.Od,
          p = e.vtp_referralExclusionDefinition;
        p &&
          p.include_conditions &&
          (p.include_conditions = a(p.include_conditions));
        f[n] = p;
        var q = e.vtp_trackingId,
          r = er(q),
          u = r.referral_exclusion_conditions;
        u &&
          (u.length && "object" === typeof u[0] && (u = c(u)),
          (f[Q.Od] = { include_conditions: a(u) }));
        var t = r.cross_domain_conditions;
        if (t) {
          t.length && "object" === typeof t[0] && (t = c(t));
          var v = {};
          f[Q.va] =
            ((v[Q.U] = a(t)),
            (v[Q.ic] = !0),
            (v[Q.hc] = !0),
            (v[Q.Vc] = "query"),
            v);
        }
        XB(q, f);
        if (d) {
          var x = Yk();
          Yq(!0).notifyContainerLoaded(q, x);
        }
        K(e.vtp_gtmOnSuccess);
      });
    })();

  (Y.h.get = ["google"]),
    (function () {
      (function (a) {
        Y.__get = a;
        Y.__get.m = "get";
        Y.__get.isVendorTemplate = !0;
        Y.__get.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_settings;
        (a.vtp_deferrable
          ? VB
          : UB)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
        a.vtp_gtmOnSuccess();
      });
    })();

  var YB = {};
  YB.dataLayer = Nh;
  YB.callback = function (a) {
    xh.hasOwnProperty(a) && Ca(xh[a]) && xh[a]();
    delete xh[a];
  };
  YB.bootstrap = 0;
  YB._spx = !1;
  (function (a) {
    if (!z["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (J.referrer) {
        var c = ki(J.referrer);
        b = "cct.google" === hi(c, "host");
      }
      if (!b) {
        var d = Oi("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((z["__TAGGY_INSTALLED"] = !0),
        Mb("https://cct.google/taggy/agent.js"));
    }
    var f = function (q) {
        var r = "GTM",
          u = "GTM";
        (r = "OGT"), (u = "GTAG");
        var t = z["google.tagmanager.debugui2.queue"];
        t ||
          ((t = []),
          (z["google.tagmanager.debugui2.queue"] = t),
          Mb(
            "https://" +
              nh.Hc +
              "/debug/bootstrap?id=" +
              Ie.J +
              "&src=" +
              u +
              "&cond=" +
              q +
              "&gtm=" +
              Mn()
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: { scriptSource: Gb, containerProduct: r, debug: !1, id: Ie.J },
        };
        v.data.resume = function () {
          a();
        };
        nh.bi && (v.data.initialPublish = !0);
        t.push(v);
      },
      g = void 0,
      h = ii(z.location, "query", !1, void 0, "gtm_debug");
    ct(h) && (g = 2);
    if (!g && J.referrer) {
      var k = ki(J.referrer);
      "tagassistant.google.com" === hi(k, "host") && (g = 3);
    }
    if (!g) {
      var n = Oi("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = J.documentElement.getAttribute("data-tag-assistant-present");
      ct(p) && (g = 5);
    }
    g && Gb ? f(g) : a();
  })(function () {
    var a = !1;
    a && Pm("INIT");
    mg().o();
    jo();
    Wj.enable_gbraid_cookie_write = !0;
    var b = !!S[Ie.J];
    if (b) {
      var c = S.zones;
      c && c.unregisterChild(Xk());
    } else {
      for (var d = Yk(), e = 0; e < d.length; e++) Dr(d[e], Ie.J);
      for (
        var f = data.resource || {}, g = f.macros || [], h = 0;
        h < g.length;
        h++
      )
        ge.push(g[h]);
      for (var k = f.tags || [], n = 0; n < k.length; n++) je.push(k[n]);
      for (var p = f.predicates || [], q = 0; q < p.length; q++) ie.push(p[q]);
      for (var r = f.rules || [], u = 0; u < r.length; u++) {
        for (var t = r[u], v = {}, x = 0; x < t.length; x++)
          v[t[x][0]] = Array.prototype.slice.call(t[x], 1);
        he.push(v);
      }
      le = Y;
      me = Ou;
      Me = new Le();
      var y = data.sandboxed_scripts,
        w = data.security_groups,
        A = data.runtime || [],
        B = data.runtime_lines;
      ry = new Hd();
      uy();
      fe = sy();
      var E = ry,
        C = oy();
      kb(E.g, "require", C);
      for (var D = 0; D < A.length; D++) {
        var F = A[D];
        if (!Ea(F) || 3 > F.length) {
          if (0 === F.length) continue;
          break;
        }
        B && B[D] && B[D].length && xe(F, B[D]);
        ry.execute(F);
      }
      if (void 0 !== y)
        for (var P = ["sandboxedScripts"], H = 0; H < y.length; H++) {
          var L = y[H].replace(/^_*/, "");
          yh[L] = P;
        }
      vy(w);
      S[Ie.J] = YB;
      for (var U = $k(), R = Xk(), O = 0; O < R.length; O++)
        U.container[R[O]] = !0;
      for (var Z = Yk(), ba = 0; ba < Z.length; ba++) U.destination[Z[ba]] = !0;
      U.canonical[Ie.Gc] = !0;
      Wa(yh, Y.h);
      qe = Ee;
      bt();
      zm = !1;
      Am = 0;
      if (
        ("interactive" == J.readyState && !J.createEventObject) ||
        "complete" == J.readyState
      )
        Cm();
      else {
        Qb(J, "DOMContentLoaded", Cm);
        Qb(J, "readystatechange", Cm);
        if (J.createEventObject && J.documentElement.doScroll) {
          var T = !0;
          try {
            T = !z.frameElement;
          } catch (Qa) {}
          T && Dm();
        }
        Qb(z, "load", Cm);
      }
      us = !1;
      "complete" === J.readyState ? ws() : Qb(z, "load", ws);
      bm && z.setInterval(Vl, 864e5);
      wh = Ta();
      YB.bootstrap = wh;
      if (a) {
        var Ia = Qm("INIT");
      }
    }
  });
})();
