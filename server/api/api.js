import { markdown } from "../namumark-parser.js";

export default defineEventHandler(async (evnt) => {
    const { asdf } = await readBody(evnt);
    try {
        var md = await markdown(null, asdf);
    }
    catch (e) {
        var md = e.stack;
    }
    return {
        api: md,
    };
});