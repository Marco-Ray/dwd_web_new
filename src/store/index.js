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
        {
          index: 0,
          track: 'fashion',
          title: 'Preface the garments',
          members: 'Xiaoqi Dai, Xinyuan Feng, Jiaze Yuan, Ziyi Zhao, Xin Shu, Xinrui Lin',
          description: 'A design idea is to a garment what a preface is to a book. By visualizing the design inspiration through novel and innovative ways, the project aims to achieve a deeper communication and establish an emotional link between audience and garments.',
          fullDescription: 'A design idea is to a garment what a preface is to a book. This project is expected to convey the design inspiration and ideas behind garments that are easily ignored by consumers. The project is divided into three parts: interactive garment in the physical part, AR tag and virtual try-on in the digital part. The physical garment focuses on the interaction with audience, emphasizing and visualizing the design elements of clothing through dynamic light effects. The AR tag hanging on the garment focuses on engagement, replacing the traditional multiple-cards style which has tedious text. By scanning the AR tag, people can see the 3D walking effect of the garment and the brief introduction of the design inspiration. Virtual try-on focuses on experience, viewers can feel the style of wearing digital clothing by themselves to help them make purchase decisions conveniently. By visualizing the design inspiration through novel and innovative ways, the project aims to achieve a deeper communication and establish an emotional link between audience and garments.',
          imageWeb: 'https://i.postimg.cc/TPW9y9yn/1-Preface-the-garment.jpg',
          imageMobile: 'https://i.postimg.cc/q74pZm8G/Preface-the-garment.jpg',
        },
        {
          index: 1,
          track: 'fashion',
          title: 'Modern Renaissance',
          members: 'Runyan Gan, Kexin Zhang, Dan Luo, Dinghao Shen, Zehuan Wang',
          description: 'Our project explores the fusion of augmented reality (AR) and Renaissance-inspired fashion, utilizing publicly accessible marble statues as a canvas for displaying ready-to-wear garments. The data consists of 3D scans of these statues, which are then combined with the designer\'s vision for the garments.',
          fullDescription: 'AR brings ready-to-wear garments to life through Renaissance marble statues in public spaces, like museums. By fusing the core concept of Renaissance, \'the version of humanism\' and the statue\'s significance with the designer\'s vision, we aim to encourage visitors to rethink the relationship between clothing and body with the advent of new technologies. Viewers scan the statue through AR to see how the clothes will look on the statue, as well as changing the colour and material of the clothes. If they like the design, they can jump directly to the purchase page via the link on the page.',
          imageWeb: 'https://i.postimg.cc/659YHnSN/2-Modern-Renaissance.jpg',
          imageMobile: 'https://i.postimg.cc/C181L2m8/renaissance-mobile.png',
        },
        {
          index: 2,
          track: 'fashion',
          title: 'World of Garment',
          members: 'Jiaqi Zhu, Ran Hu, Tanisha Singh',
          description: 'This project created a fantasy world for one of the designers\' garments based on the qualities of their garments. Based on AR technology, users can immerse themselves in this fantasy world and try on the clothes virtually.',
          fullDescription: 'The project aims to use immersive and interactive technology in the luxury fashion industry to push the boundaries of traditional marketing and engage consumers in a dynamic and innovative manner. By creating a digital world representing the brand\'s values and identity, designers can explore new ways of connecting with customers, building stronger relationships, and ultimately driving sales. The project uses digital garments provided by fashion designers Georgia Brown and Georgia Markland, to transform their designs into a 3D immersive experience in the form of a website and an AR art installation. \n' +
            '\n' +
            'This project creates a fantasy world for one of the designers\' garments based on the qualities of their garments. Based on AR technology, users can immerse themselves in this fantasy world and try on the clothes virtually. The website collects information about their preferences as users try them on to suggest similar styles. This project is dedicated to providing a more immersive and personalised shopping experience for users.',
          imageWeb: 'https://i.postimg.cc/nhrTxZpR/3-World-of-Garment.jpg',
          imageMobile: 'https://i.postimg.cc/c1b44BSs/World-of-Garment.jpg',
        },
        {
          index: 3,
          track: 'fashion',
          title: 'Copro',
          members: 'Yunfan Hu, Shiping Yu and Yuru Yang',
          description: 'Due to the enormous environmental pollution caused by fast fashion, we hope to enable more people to contribute to the environment through sustainable fashion, while realizing commercial value. We use blockchain data records to quantify users\' contributions to the environment and apply them to environmental games.',
          fullDescription: 'Due to the enormous environmental pollution caused by fast fashion, we hope to enable more people to contribute to the environment through sustainable fashion, while realizing commercial value. Therefore, we plan to create a sustainable fashion module on Farfetch. Firstly, this module mainly uses blockchain technology to ensure the transparency of the entire life cycle of sustainable clothing. Secondly, we have a dedicated circular fashion module to maximize the use of each product, and we reward users participating in our community through environmentally friendly games, thereby increasing user stickiness and fun. \n' +
            '\n' +
            '  \n' +
            '\n' +
            'When users participate in our community activities, such as purchasing sustainable clothing, participating in circular fashion, and so on, they are equivalent to making contributions to the environment, such as reducing carbon emissions, and reducing waste of water resources. We use blockchain data records to quantify users\' contributions to the environment and apply them to environmental games. In the game, these contributions generate energy rewards that can be used to revive Earth creatures such as flowers and plants.',
          imageWeb: 'https://i.postimg.cc/wjr2TPB6/4-Copro.png',
          imageMobile: 'https://i.postimg.cc/X7BNZBj9/Copro.png',
        },
        {
          index: 4,
          track: 'fashion',
          title: 'UFO',
          members: 'Chenxi Zhou, Jiaqi Liu, Yue Zhang, Wenhua Jiang, Yinan Mi, Boya Chen',
          description: 'UFO is a PR company that helps to promote young designers. Our installation includes a Looking Glass display garment’s NFT, brochures telling the story behind the garment, display screen show our website and a ready-to-wear garment.',
          fullDescription: 'Based on the problems faced by young fashion designers due to lack of resources and supportive systems available to establish their brand image and promotion, we set up a PR company. \n' +
            ' \n' +
            '\n' +
            'Our PR company provides young designers with: Brand Design, Website Design, Garment production, generating Garments story on blockchain, community operation and offline events, PR gift boxes to increase their publicity. We believe that fashion is not just about what you wear, but also about the story behind each designed piece. That\'s why we\'re committed to creating meaningful connections between designers, customers, and the broader fashion community through emphasis on storytelling and community building. Our purpose: Unleashing the Power of Youthful Fashion. Your Brand, Our Voice!',
          imageWeb: 'https://i.postimg.cc/XJSg9CFm/5-UFO.png',
          imageMobile: 'https://i.postimg.cc/Mpk61ZHN/UFO.png',
        },
        {
          index: 5,
          track: 'fashion',
          title: "Fashion's Gambit",
          members: 'Yuhao Wang, Shirui Zhao, Michael Huang, Zeqing Fan',
          description: 'The project aims to promote sustainable fashion, increase awareness of the impact of fast fashion on the environment and society. A game has been developed to help people understand how their behaviour directly affects the environment by treating clothing as if they have their own life.',
          fullDescription: 'Fast fashion clothing often has a short lifespan due to the use of cheap materials and manufacturing standards, leading to excessive consumption of resources and energy and creating a large amount of textile waste. Using organic cotton and recyclable polyester can significantly reduce water consumption, greenhouse gas emissions, and carbon footprint. Around 112,000 tons of textile waste are discarded or incinerated in Europe each year, causing environmental and health problems. To address this issue, a game has been developed to help people understand how their behaviour directly affects the environment and society by treating clothing as if they have their own life. Players can learn eco-friendly actions, including choosing sustainable materials, buying high-quality and durable clothing, avoiding excessive washing, and properly disposing of and recycling discarded clothing. The project aims to promote sustainable fashion, increase awareness of the impact of fast fashion on the environment and society, and provide practical tools and resources for people to make more sustainable choices.',
          imageWeb: 'https://i.postimg.cc/VvF4fkJT/6-Fashion-s-Gambit.jpg',
          imageMobile: 'https://i.postimg.cc/j2msgtXW/Fashion-s-Gambit.jpg',
        },
        {
          index: 6,
          track: 'fashion',
          title: 'Soul Tailor',
          members: 'Zhongxiao Cong, Xinhang Xu, Ruoxi Li, Ruishan Li, Jingzhou Gao',
          description: 'Soul Tailor is an immersive game in which the audience role-play a tailor and explore one\'s mental world constrained by body anxiety.',
          fullDescription: 'Our project is exploring the possibility to understand customers\' mental world when conducting fashion design, which has great potential in building a much closer relationship between garment designers and customers, and in generating more personalised garments.  \n' +
            '\n' +
            'Our data is mainly based on the topic of body anxiety, which has been encountered by people from all age groups these days. From our research, peers, family and social media can all cause severe body anxiety to individuals.  \n' +
            '\n' +
            'We are using Unity2D to illustrate such results in our game artefact, which tells a story of a special tailor and the customer. With a magical mirror, the tailor can see through the customer\'s mind and enter their mental world. In this world, the tailor can experience all the dilemmas the customer has been through in their daily life owing to anxieties towards body, as well as the pressure others have put on the customer. After the experience, the tailor will understand the customer better, and create a garment which better suits her body and reduce anxiety. \n' +
            '\n' +
            'Our project is aimed at inspiring fashion designers to interact with and understand more deeply about their clients, and also encouraging the public to take in more personalised fashion designs for different people with various requirements.',
          imageWeb: 'https://i.postimg.cc/tRdBt2B5/7-Soul-Tailor.jpg',
          imageMobile: 'https://i.postimg.cc/QMmjLpmZ/Soul-Tailor.png',
        },
        {
          index: 7,
          track: 'fashion',
          title: 'Fashion Diffusion',
          members: 'Xiaoyang Chen, Xuyun Lin',
          description: 'Our project, Fashion Diffusion, is a virtual exhibition designed with Unity, featuring fashion artworks created by fashion students and AI. Additionally, users can collaborate with AI to design and create their own unique fashion garments, which will be part of the exhibition.',
          fullDescription: 'Our project, Fashion Diffusion, is a virtual exhibition designed with Unity, featuring fashion artworks created by fashion students and AI. Additionally, users can collaborate with AI to design and create their own unique fashion garments, which will be part of the exhibition. Our AI model, based on the popular Stable Diffusion model, is fine-tuned using fashion garment images to create a text-to-image model that specialises in generating fashion concepts. With the integration of this model into Unity and a prompt template we create, users can easily generate their own fashion garments by simply selecting several key words. Our goal is to democratise fashion design and inspire new ideas by exploring the concept of "adjacent possible.”',
          imageWeb: 'https://i.postimg.cc/Pr2K0Nsv/8-Fashion-Diffusion.jpg',
          imageMobile: 'https://i.postimg.cc/P5mtyG8x/Fashion-Diffusion.jpg',
        },
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
          imageWeb: 'https://i.postimg.cc/yxfxZjP7/Dynamic-Coral-website.jpg',
          imageMobile: 'https://i.postimg.cc/CxJC3PR4/Dynamic-Coral-mobile.jpg',
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
          imageWeb: 'https://i.postimg.cc/7YwwmtwY/2-Pneuma.jpg',
          imageMobile: 'https://i.postimg.cc/HxGkHQ8S/Pneuma.jpg',
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
          imageWeb: 'https://i.postimg.cc/BvkJpqQd/3-Bumble-B-to-C.jpg',
          imageMobile: 'https://i.postimg.cc/VN0k37vr/Bumble-B-to-C.jpg',
        },
        {
          index: 3,
          track: 'ecology',
          title: 'Bio-compass',
          members: 'Heng Wang, Junchi Wu, Longyan Weng, Xuan Shen',
          description: 'The interactive device - Bio-compass - consists of a circular balance board and 2 sets of opposing weights. The circular balance board is made by laser cutting, while the weights represent different human factors and measures, made with alginate and vegetable glycerine to create a bio-plastic that represents each one.',
          fullDescription: '"The Marine Compass" is an interactive art device that aims to raise people\'s awareness of the need for marine conservation and fosters awareness of pressing oceanic challenges. It consists of a circle balance board and some weights, which are categorised into two groups, main threat factors and potential solutions. In particular, the positions of weights representing threats are fixed, and the further away from the centre they are located, the greater the potential harm they pose. These distances are derived and analysed from a quantified dataset on the degree of marine threats. Players should place them in the proper positions on the board to keep the board balanced. In the process, the players will be aware of the different implications of certain factors to the marine ecosystem and will increase their ecological consciousness.',
          imageWeb: 'https://i.postimg.cc/8zCDVF72/4-Bio-Compass.jpg',
          imageMobile: 'https://i.postimg.cc/Rh4CJ4RK/Biocompass.jpg',
        },
        {
          index: 4,
          track: 'ecology',
          title: 'Microplastic Chain',
          members: 'Kaihuang Huang, Liuyang Chen, Bingyu Jiang, Rui Li',
          description: 'Our installation employs the form of a puzzle game, allowing users to construct the spread pathways of microplastics in different species in the ocean ecosystem by piecing together provided puzzles. Each species puzzle includes data on the size of microplastics within the species.',
          fullDescription: 'With the widespread production and use of plastic products, over 60% of plastic has not undergone recycling and much of it has entered the ocean. Due to the influence of sunlight and waves, large pieces of plastic gradually break down into microplastics smaller than 5mm in size and enter the ocean ecosystem. To raise awareness about this issue, our project employs the form of a puzzle game, allowing users to construct the spread pathways of microplastics in different species in the ocean ecosystem by piecing together provided puzzles. Each species puzzle includes data on the size of microplastics within the species. Finally, users can control a ball representing microplastics, moving it along the constructed pathways. Based on the different pathways built by the user, the ball will ultimately settle at various endpoints, simulating the real-life movement path of the microplastics.',
          imageWeb: 'https://i.postimg.cc/ZRN4D1W0/5-Microplastic-chain.jpg',
          imageMobile: 'https://i.postimg.cc/6pg9Ldc9/Microplastic-chain.jpg',
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
          imageWeb: 'https://i.postimg.cc/cJgSrVMT/6-Ecological-mesh.png',
          imageMobile: 'https://i.postimg.cc/2yGk4McJ/Ecological-mesh.jpg',
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
          imageWeb: 'https://i.postimg.cc/BZxJ5fWV/7-Wildfire-Simulator.jpg',
          imageMobile: 'https://i.postimg.cc/3RgJwdg3/Wildfire-simulator.jpg',
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
          imageWeb: 'https://i.postimg.cc/zv18m0h7/8-A-Spring-Ahead.jpg',
          imageMobile: 'https://i.postimg.cc/c4D16q8t/A-Spring-Ahead.png',
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
          imageWeb: 'https://i.postimg.cc/52kJ9xv6/9-Pollution-rhythm.jpg',
          imageMobile: 'https://i.postimg.cc/BQZQqZtG/Pollution-rhythm-mobile.jpg',
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
          imageWeb: 'https://i.postimg.cc/28xTPDXJ/Impressions-website.jpg',
          imageMobile: 'https://i.postimg.cc/hjH3P195/Impressions-mobile.jpg',
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
