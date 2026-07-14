/****************************************************************************************
 * Karatech ELV
 * File : vite.config.ts
 * Description :
 * Vite Configuration
 ****************************************************************************************/

import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({

    base:"/v2/",

    plugins:[

        react()

    ],

    server:{

        host:true,

        port:5173,

        open:true

    },

    preview:{

        port:4173

    },

    resolve:{

        alias:{

            "@":"/src",

            "@components":"/src/components",

            "@pages":"/src/pages",

            "@layouts":"/src/layouts",

            "@router":"/src/router",

            "@hooks":"/src/hooks",

            "@services":"/src/services",

            "@store":"/src/store",

            "@styles":"/src/styles",

            "@assets":"/src/assets",

            "@database":"/src/database"

        }

    }

});
