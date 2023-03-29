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
        {
          index: 0,
          track: 'ecology',
          title: 'Dynamic Coral',
          members: 'Andy Ernst, Yang Ou, Liyuan Sun',
          description: 'Our exhibition explores the threat of global warming to coral reefs. Viewers interact with a simulated coral reef with their hands, causing coral bleaching and death. We aim to raise awareness and inspire action to protect these fragile ecosystems.',
          fullDescription: 'Coral reefs, some of the oldest ecosystems on Earth, are under a serious threat from global warming. Between 2009 and 2018, rising ocean temperatures led to extreme heating events that killed off 14% of the world\'s coral. These events have become more frequent and severe in recent decades, putting the very existence of coral at risk. \n' +
            '\n' +
            'To raise awareness of this urgent issue, we have developed an immersive simulation that demonstrates the impact of human-made climate change on coral reef ecosystems. Visitors can interact with the environment by moving their hands, which causes the water temperature to rise and the ecosystem to suffer. If the temperature gets too high, the coral can bleach, die, and be taken over by turfing algae. However, with time and care, the coral can recover. \n' +
            '\n' +
            'Our installation features a plaster model of coral, which is brought to life by a projection-mapped image from a short-throw projector. The simulated coral reef is projected behind the model, and explanatory text appears on the screen to guide visitors through the various stages of the process. The ecosystem is simulated using Processing, and hand motion tracking is achieved with a Leap Motion device. \n' +
            '\n' +
            'Our goal is to raise awareness about the plight of coral reefs and encourage empathy for these precious ecosystems. We want to show that, with the right interventions, coral can recover and thrive once again.',
        },
        {
          index: 1,
          track: 'ecology',
          title: 'Pneuma',
          members: 'Jingfei Zhao, Siwei Zhu, Xinmiao Chen, Xinyi Liu',
          description: 'Our installation has an interaction spot that the audience could breath air into, which represents the emission of carbon dioxide, and then the backend would receive signal, hence play CGs on five screens, showing the rising sea as well as the mutation of plants.',
          fullDescription: 'In the future, human activity is responsible for rising levels of carbon dioxide in the atmosphere, and High CO2 levels will lead to global warming, which causes the sea level to rise and submerge the ground\'s surface, which leads to the genetic mutation of the submerged plants. As a result, the plants will grow structures adapted to the underwater environment. The variation direction of future plants will be designed based on the research and features of the current aquatic plants. Finally, the installation will show the future of the urban landscape scenario. \n' +
            '\n' +
            'Our data include cities that would be badly affected by the rising sea level, we picked plant species from those cities, then did research on how the sea environment could affect those plant species both chemically and physically, hence made speculations on how those plants could mutate. \n' +
            '\n' +
            'Our installation has an interaction spot that the audience could breathe air into, which represents the emission of carbon dioxide, simulating the mutations of plants as well as rising sea levels on five screens.',
        },
        {
          index: 2,
          track: 'ecology',
          title: 'BumbleB to C',
          members: 'Jenny Hu, Miao Yu, Yihan Sun, Yuexia Wang',
          description: 'The installation shows the change of bumblebee’s appearance in 100 years under an increase of average temperature from 1.5 ̊C to 4.4 ̊C based on IPCC predictions of future scenarios. Rotate the handle to see how bumblebees are going to change.',
          fullDescription: 'Evolution takes place mostly by natural selection, which leads to changes in the appearance and genetics of individual animals over time to adapt to environmental changes. In the latest millennium, human behaviour has significantly impacted the Earth\'s environment, to the point of constituting a new geological epoch. \n' +
            '\n' +
            'The installation shows the change of bumblebee’s appearance in 100 years under an increase of average temperature from 1.5 ̊C to 4.4 ̊C based on IPCC predictions of future scenarios. \n' +
            '\n' +
            'Rotate the handle to see how bumblebees are going to change. Two different coloured dots on each of the sheets showing these changes act as visual guides. As temperatures rise, bumblebees will look for habitats in cooler, and higher altitude regions. With further temperature increases, bumblebees will be forced to adapt to the heat. \n' +
            '\n' +
            'Our predictions are based on current research into the morphological characteristics of bumblebees living in different regions. We specifically studied populations living in equatorial, cold regions, and high altitudes. The prediction suggests that noticeable changes will be seen on the wings and the body.',
        },
        {
          index: 3,
          track: 'ecology',
          title: 'Bio-compass',
          members: 'Heng Wang, Junchi Wu, Longyan Weng, Xuan Shen',
          description: 'The interactive device - Bio-compass - consists of a circular balance board and 2 sets of opposing weights. The circular balance board is made by laser cutting, while the weights represent different human factors and measures, made with alginate and vegetable glycerine to create a bio-plastic that represents each one.',
          fullDescription: '"The Marine Compass" is an interactive art device that aims to raise people\'s awareness of the need for marine conservation and fosters awareness of pressing oceanic challenges. It consists of a circle balance board and some weights, which are categorised into two groups, main threat factors and potential solutions. In particular, the positions of weights representing threats are fixed, and the further away from the centre they are located, the greater the potential harm they pose. These distances are derived and analysed from a quantified dataset on the degree of marine threats. Players should place them in the proper positions on the board to keep the board balanced. In the process, the players will be aware of the different implications of certain factors to the marine ecosystem and will increase their ecological consciousness.',
        },
        {
          index: 4,
          track: 'ecology',
          title: 'Microplastic Chain',
          members: 'Kaihuang Huang, Liuyang Chen, Bingyu Jiang, Rui Li',
          description: 'Our installation employs the form of a puzzle game, allowing users to construct the spread pathways of microplastics in different species in the ocean ecosystem by piecing together provided puzzles. Each species puzzle includes data on the size of microplastics within the species.',
          fullDescription: 'With the widespread production and use of plastic products, over 60% of plastic has not undergone recycling and much of it has entered the ocean. Due to the influence of sunlight and waves, large pieces of plastic gradually break down into microplastics smaller than 5mm in size and enter the ocean ecosystem. To raise awareness about this issue, our project employs the form of a puzzle game, allowing users to construct the spread pathways of microplastics in different species in the ocean ecosystem by piecing together provided puzzles. Each species puzzle includes data on the size of microplastics within the species. Finally, users can control a ball representing microplastics, moving it along the constructed pathways. Based on the different pathways built by the user, the ball will ultimately settle at various endpoints, simulating the real-life movement path of the microplastics.',
        },
        {
          index: 5,
          track: 'ecology',
          title: 'Ecological Mesh',
          members: 'Cynthia Chen, Peijun Zhang, Yuhao Huang, Shirui He',
          description: 'A tensile sculpture that represents a miniature marine ecosystem. The audience can interact with it to feel the relationship between marine litter, coral and fish. We want to inspire people to protect marine environment and marine species.',
          fullDescription: 'Marine litter in the ocean has become one of the most pressing environmental issues. Nearly 700 species are known to have been affected by plastics, and it is poisoning one of the world’s natural wonders: coral reefs. In a survey published in Science, researchers estimate there to be a staggering 11.1 billion plastic items entangled in the corals.  \n' +
            '\n' +
            'The aim of our project is to explore the impact of marine litter on coral ecosystems. As one of the natural wonders of the world, coral is ornamental and provides a habitat for the world\'s marine life. However, it is difficult for people to feel that coral-reefs have been destroyed because they live on the bottom of the sea. According to our data analysis, we found a negative correlation between the coral cover and rubbish cover. What\'s more, with coral cover being greater, the fish richness becomes higher. \n' +
            '\n' +
            'Based on the data, we wanted to build a tensile sculpture to represent a miniature marine ecosystem. The audience can interact with it to feel the relationship between marine litter, coral and fish. We want to inspire people to protect marine environment and marine species.',
        },
        {
          index: 6,
          track: 'ecology',
          title: 'Wildfire Simulator',
          members: 'Wangc Guo, Kevin Zhu, Shirley Dong, Nicole Hu',
          description: 'The installation is a wildfire simulator, using a two-way interaction. The display section uses light and laser cut patterns to represent fire. Whilst the interactive section, human activity are categorised into five factors where users need to pull, symbolising the impact of human forces on the balance of the ecosystem.',
          fullDescription: 'Wildfires – how is human behaviour involved? \n' +
            '\n' +
            'Through people\'s interaction with our installation, we hope to make people aware of how human activity affects the occurrence of wildfires. The installation is divided into a display section and an interactive section. In the display section we used a combination of light and laser cut patterns to create the atmosphere of the fire. In the interactive section we categorised human activity into five factors and chose a pull interaction where different factors require different pull times to cause a wildfire, symbolising the impact of human forces on the balance of the ecosystem. These interactions also allow one to understand the differences in the impact of the various factors on the occurrence of wildfires.',
        },
        {
          index: 7,
          track: 'ecology',
          title: 'A Spring Ahead',
          members: 'Jenny Long, Jiamei Huang, Michaella Yosephine',
          description: 'Our installation "A Spring Ahead" is made of acrylic and aluminium. Each piece\'s colour represents a different phenology. The top layer represents the length of the ecological spring. The white knob on the bottom right controls the spring temperature.',
          fullDescription: 'Human activities have propagated climate change, causing earlier ecological spring and misbalancing interspecies interactions. One example is the tritrophic (plant-herbivore-predator) interactions between trees’ first leaf, caterpillar peak population, and bird peak feeding demand. These events occur cyclically, also known as “phenology”. \n' +
            '\n' +
            'Warmer temperatures lead to earlier spring phenologies. Some creatures, like birds, adapt slower. This forms mismatches between peak resource demand (birds feeding) and availability (caterpillar population). Eventually, this can cause population decline. \n' +
            '\n' +
            '“A Spring Ahead” simulates how rising temperatures affect UK’s spring tritrophic phenologies based on data from Nature\'s Calendar, Met Office, and research by Burgess et al. (2018). Each phenology is portrayed as small acrylic pieces. Overlapping pieces depict matching phenologies. Over the pieces, lies a transparent disc with a quarter gap that shows ecological spring duration. Surrounding the pieces is a fixed, circular 365-day calendar, meant to show the rigidity of our concept of time. \n' +
            '\n' +
            'Visitors can turn a knob to change the spring temperature, which will change the position of each petal. The higher the temperature, the larger the gap between the petals, showing increasing phenological mismatches. As the temperature increases, the ecological spring plate will show spring starting earlier, portraying the flexibility of ecological time.',
        },
        {
          index: 8,
          track: 'ecology',
          title: 'Pollution Rhythm from Fast Fashion',
          members: 'Ganrong Tan, Ziheng Zhu, Hao Wen, Xinyang Bian',
          description: 'Our project uses a heat map of the distribution of microplastics in the world\'s oceans. We translated the data into sound, where visitors can use the "detector" in the ocean map to explore the microplastic content in different ocean regions.',
          fullDescription: 'Today, with the prevalence of fast fashion culture, the output of human clothing has doubled, and more than 60% of our clothing is made of man-made fibers. Although clothing has become less durable, it has become cheaper. We now own five times as many clothes as our grandparents, which seemed fine until scientists noticed that clothes made of synthetic fibers create microplastic fibers every time they are washed, especially fast fashion clothes which often contain a high percentage of synthetic fibers. Microplastic fibers will eventually flow into the ocean through sewers, be ingested by marine organisms, and ultimately have an immeasurable impact on the ecology. \n' +
            '\n' +
            'Our team obtained a heat map of the distribution of microplastics in the world\'s oceans. We translated the data into sound through arduino. Visitors can use the "detector" in the ocean map to explore the microplastic content in different ocean regions.  \n' +
            '\n' +
            'We want visitors to feel the huge impact of microplastic fibers in clothing on marine ecology through hearing, so as to arouse visitors\' reflection on the problems behind the trend of fast fashion culture.',
        },
        {
          index: 9,
          track: 'ecology',
          title: 'Impressions of the Caledonian Forest Through Time',
          members: 'Laura Hutchison, Yanan Zhang',
          description: 'The glass slides have “snapshots” of a current day surviving portion of the Caledonian Forest at different points in time. Each shows points of major change, especially human-related, of the forest. The furthest slide has the oldest point, and the second near most portraying that location as it would look today.',
          fullDescription: 'A look at the reducing and changing Caledonian Forest ecology from ancient times until now. Glass slides with scenes from the same site of the Caledonian Forest at different points in time, especially at points where human activity has impacted the form of the forest. A speculative insight into the future of the forest is affected by human interactions. 5-7 A4 landscape slides set up one behind another. Accompanied by a website by QR code or monitor at the back to enhance the slides’ impact.  \n' +
            '\n' +
            'The glass slides have “snapshots” of a current day surviving portion of the Caledonian Forest at different points in time. Each shows points of major change, especially human-related, of the forest. The furthest slide has the oldest point (ancient, approx. 600 years ago), and the 2nd near most portraying that location as it would look today. The glass slides are to be viewed similarly to a shadow box or individually. \n' +
            '\n' +
            'A future slide shows this spot in a potentially renewed state, but is the only slide that is meant to be manipulatable to viewers. Parts of this slide are to be manipulated by continued handling reflecting the past exploitation of the forest and the potential of continued human interference in the natural cycle.',
        },
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
