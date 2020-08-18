const defaultLang = {
    ch_upcoming:'Upcoming Campaigns',
    ch_live:'Live Campaigns',
    ch_past:'Past Campaigns',
    ch_manage:'Manage Campaigns'
};

const germanLang = {
    ch_upcoming:'Kommende Kampagnen',
    ch_live:'Live-Kampagnen',
    ch_past:'vergangene Kampagnen',
    ch_manage:'Kampagnen verwalten'
};
const constants = {
    en: {
        ...defaultLang
    },
    ge: {
        ...germanLang
    }
};

export default lang => constants[lang];
