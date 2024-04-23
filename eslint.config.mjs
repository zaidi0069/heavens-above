import globals from "globals";
import pluginJs from "@eslint/js";


module.exports = {
  extends: ['plugin:js/recommended'],
  rules: {
    // Relax rules here:
    'no-global-assign': 'off', // Disable the 'no-global-assign' rule
    'no-unused-vars': 'off', // Disable the 'no-unused-vars' rule
  },
};
