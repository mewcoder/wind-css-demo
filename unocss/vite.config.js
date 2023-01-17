import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";

export default {
  plugins: [
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
};

// https://icones.js.org/collection/ep
