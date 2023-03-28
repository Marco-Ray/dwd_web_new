import { createStore } from 'vuex';

export default createStore({
  state: {
    viewMode: 'carousel',
    project: {},
    fashion: {
      description: 'Fashion Informatics explores data in the context and landscape of fashion, ' +
        'whether it is the body, the possibility of movement and 3D cloth, ' +
        'or envisioning new retail environments, shopping experiences and business models, ' +
        'with sustainability as a core lens to inform students’ design thinking. ' +
        'Working with 2nd year BA fashion students, led by Emma Clifton, ' +
        'each group in this cohort takes inspiration from the students’ digital fashion garments, ' +
        'their concepts and processes, into an expanded range of applications such as AR virtual try-on, ' +
        'decentralised AI fashion platform, blockchain technology for fashion transparency. ' +
        'The works in display seek to rethink, disrupt and reimagine fashion beyond its physicality, ' +
        'conception and norm, to create new insights whilst fostering environmental awareness in consumers.',
      projects: [
        { index: 0, track: 'fashion', title: '0' },
        { index: 1, track: 'fashion', title: '1' },
        { index: 2, track: 'fashion', title: '2' },
      ],
    },
    ecology: {
      description: 'Designing Ecologies explores data through the lenses of natural and ecological systems. ' +
        'It questions how we can adapt the design of data-driven artefacts and systems to consider the emergent qualities and embedded meanings in the data, ' +
        'how different forms of life are expressed, interconnected, ' +
        'as well as giving ‘voices’ to the more-than-human and the underrepresented during data collection and materialisation. ' +
        'The works in display explore the future effects of human activity on the Earth System, ranging from the degradation of coral reefs, ' +
        'morphological modifications in plants, bumblebees, phenological mismatches between trees, ' +
        'caterpillars and birds, to marine ecosystems through participatory games, ' +
        'bio-design approaches to data physicalisation and sculptural installations.',
      projects: [
        { index: 0, track: 'ecology', title: '0' },
        { index: 1, track: 'ecology', title: '1' },
        { index: 2, track: 'ecology', title: '2' },
        { index: 3, track: 'ecology', title: '3' },
      ],
    },
  },
  getters: {
    getViewMode: state => state.viewMode,
    getProject: state => state.project,
    getFashionTrack: state => state.fashion,
    getEcologyTrack: state => state.ecology,
  },
  mutations: {
    switchViewMode (state, mode) {
      state.viewMode = mode;
    },
    setProject (state, params) {
      state.project = params.track === 'fashion' ? state.fashion.projects[params.id] : state.ecology.projects[params.id];
    },
  },
  actions: {
  },
  modules: {
  },
});
