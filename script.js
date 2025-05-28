    
    function show(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }
    
    // Villagers
    const villagers = [
        {
            name: "Alex",
            image: "media/villagers/Alex.png",
            season: "media/icons/Summer.png",
            birthday: "Summer 13",
            description: "Alex loves sports and hanging out at the beach. He is quite arrogant and brags to everyone that he is going to be a professional athlete.",
            lovedItems: ["Complete Breakfast", "Salmon Dinner", "Pearl", "Jack Be Nimble, Jack Be Thick"],
        },
        {
            name: "Elliott",
            image: "media/villagers/Elliot.png",
            season: "media/icons/Fall.png",
            birthday: "Fall 5",
            description: "Elliott is a writer who dreams of writing a novel. He is a sentimental “romantic” with a tendency to go off onto poetic tangents.",
            lovedItems: ["Crab Cakes", "Duck Feather", "Lobster", "Pomegranate"]
        },
        {
            name: "Harvey",
            image: "media/villagers/Harvey.png",
            season: "media/icons/Winter.png",
            birthday: "Winter 14",
            description: "Harvey is the town doctor who has a kind heart and a respected position in the community. He spends most of his time working.",
            lovedItems: ["Coffee", "Pickles", "Super Meal", "Truffle Oil"]
        },
        {
            name: "Sam",
            image: "media/villagers/Sam.png",
            season: "media/icons/Summer.png",
            birthday: "Summer 17",
            description: "Sam is an outgoing, friendly guy brimming with youth. He plays guitar and drums, and wants to start a band with Sebastian.",
            lovedItems: ["Cactus Fruit", "Maple Bar", "Pizza", "Tigerseye"]
        },
        {
            name: "Sebastian",
            image: "media/villagers/Sebastian.png",
            season: "media/icons/Winter.png",
            birthday: "Winter 10",
            description: "Sebastian is a rebel who can be a bit unfriendly. He gets deeply absorbed in his work, games, comic books, and sci-fi novels.",
            lovedItems: ["Frozen Tear", "Obsidian", "Pumpkin Soup", "Sashimi"]
        },
        {
            name: "Shane",
            image: "media/villagers/Shane.png",
            season: "media/icons/Spring.png",
            birthday: "Spring 20",
            description: "Shane is often rude and unhappy, a heavy drinker, and suffers from depression. However, his attitude changes to some. ",
            lovedItems: ["Beer", "Hot Pepper", "Pepper Poppers", "Pizza"]   
        },
        {
            name: "Abigail",
            image: "media/villagers/Abigail.png",
            season: "media/icons/Fall.png",
            birthday: "Fall 13",
            description: "Abigail lives at the general store with her parents. She fights with her mom, who worries about Abigail's \"alternative lifestyle\".",
            lovedItems: ["Amethyst", "Blackberry Cobbler", "Pumpkin", "Spicy Eel"]
        },
        {
            name: "Emily",
            image: "media/villagers/Emily.png",
            season: "media/icons/Spring.png",
            birthday: "Spring 27",
            description: "Emily is a creative and spiritual clothier. She loves to make her own clothing and works at The Stardrop Saloon. ",
            lovedItems: ["Amethyst", "Aquamarine", "Cloth", "Emerald"]
        },
        {
            name: "Haley",
            image: "media/villagers/Haley.png",
            season: "media/icons/Spring.png",
            birthday: "Spring 14",
            description: "Being wealthy throughout high school has made Haley a little conceited. She tends to judge people for superficial reasons. ",
            lovedItems: ["Coconut", "Fruit Salad", "Pink Cake", "Sunflower"]
        },
        {
            name: "Leah",
            image: "media/villagers/Leah.png",
            season: "media/icons/Winter.png",
            birthday: "Winter 23",
            description: "Leah is a talented artist with a large portfolio of work. She loves to spend time outside, foraging for a meal or enjoying the season. ",
            lovedItems: ["Goat Cheese", "Poppyseed Muffin", "Salad", "Truffle"]
        },
        {
            name: "Maru",
            image: "media/villagers/Maru.png",
            season: "media/icons/Summer.png",
            birthday: "Summer 10",
            description: "Maru acquired a passion for creating gadgets at a young age. When she isn’t in her room, fiddling with tools, she  does odd jobs at the clinic. ",
            lovedItems: ["Battery Pack", "Rhubarb Pie", "Cheese Cauliflower", "Dwarf Gadget"]
        },
        {
            name: "Penny",
            image: "media/villagers/Penny.png",
            season: "media/icons/Fall.png",
            birthday: "Fall 2",
            description: "Penny is shy and modest. While her mother is out at the saloon, Penny quietly tends to her chores in the dim, stuffy room she is forced to call home.",
            lovedItems: ["Diamond", "Poppyseed Muffin", "Melon", "Sandfish"]
        }
    ];

    function loadVillagers() {
        const container = document.getElementById('villagerList');
        villagers.forEach(villager => {
            container.innerHTML += `
                <div class="villager-card">
                    <center>
                        <img src="${villager.image}" alt="${villager.name}" width="100">
                        <h3 style="margin:0">${villager.name}</h3>
                    </center>
                    <p style="margin:0px"><img src="${villager.season}"> ${villager.birthday}</p>
                    <p>${villager.description}</p>
                    <b>Loves</b> <br>
                        &ensp;${villager.lovedItems[0]}<br>
                        &ensp;${villager.lovedItems[1]}<br>
                        &ensp;${villager.lovedItems[2]}<br>
                        &ensp;${villager.lovedItems[3]}<br>
                </div>
            `;
        });
    }

    // Crops
    const crops = [
        // Spring Crops
        { name: "Blue Jazz",    image: "media/crops/Blue_Jazz.png",     season: "Spring", growthDays: 7, regrow: 0, sellPrice: 50, seedCost: 30 },
        { name: "Cauliflower",  image: "media/crops/Cauliflower.png",   season: "Spring", growthDays: 12, regrow: 0, sellPrice: 175, seedCost: 80 },
        { name: "Garlic",       image: "media/crops/Garlic.png",        season: "Spring", growthDays: 4, regrow: 0, sellPrice: 60, seedCost: 40 },
        { name: "Green Bean",   image: "media/crops/Green_Bean.png",    season: "Spring", growthDays: 10, regrow: 3, sellPrice: 40, seedCost: 60 },
        { name: "Kale",         image: "media/crops/Kale.png",          season: "Spring", growthDays: 6, regrow: 0, sellPrice: 110, seedCost: 70 },
        { name: "Parsnip",      image: "media/crops/Parsnip.png",       season: "Spring", growthDays: 4, regrow: 0, sellPrice: 35, seedCost: 20 },
        { name: "Potato",       image: "media/crops/Potato.png",        season: "Spring", growthDays: 6, regrow: 0, sellPrice: 80, seedCost: 50 },
        { name: "Rhubarb",      image: "media/crops/Rhubarb.png",       season: "Spring", growthDays: 13, regrow: 0, sellPrice: 220, seedCost: 100 },
        { name: "Strawberry",   image: "media/crops/Strawberry.png",    season: "Spring", growthDays: 8, regrow: 4, sellPrice: 120, seedCost: 100 },

        // Summer Crops
        { name: "Blueberry",    image: "media/crops/Blueberry.png",     season: "Summer", growthDays: 13, regrow: 4, sellPrice: 80, seedCost: 80 },
        { name: "Hops",         image: "media/crops/Hops.png",          season: "Summer", growthDays: 11, regrow: 1, sellPrice: 25, seedCost: 60 },
        { name: "Hot Pepper",   image: "media/crops/Hot_Pepper.png",    season: "Summer", growthDays: 5, regrow: 3, sellPrice: 40, seedCost: 40 },
        { name: "Melon",        image: "media/crops/Melon.png",         season: "Summer", growthDays: 12, regrow: 0, sellPrice: 250, seedCost: 80 },
        { name: "Poppy",        image: "media/crops/Poppy.png",         season: "Summer", growthDays: 7, regrow: 0, sellPrice: 140, seedCost: 100 },
        { name: "Radish",       image: "media/crops/Radish.png",        season: "Summer", growthDays: 6, regrow: 0, sellPrice: 90, seedCost: 40 },
        { name: "Red Cabbage",  image: "media/crops/Red_Cabbage.png",   season: "Summer", growthDays: 9, regrow: 0, sellPrice: 260, seedCost: 100 },
        { name: "Starfruit",    image: "media/crops/Starfruit.png",     season: "Summer", growthDays: 13, regrow: 0, sellPrice: 750, seedCost: 400 },
        { name: "Summer Spangle", image: "media/crops/Summer_Spangle.png", season: "Summer", growthDays: 8, regrow: 0, sellPrice: 90, seedCost: 50 },
        { name: "Sunflower",    image: "media/crops/Sunflower.png",     season: "Summer", growthDays: 8, regrow: 0, sellPrice: 80, seedCost: 200 },
        { name: "Tomato",       image: "media/crops/Tomato.png",        season: "Summer", growthDays: 11, regrow: 4, sellPrice: 60, seedCost: 50 },

        // Fall Crops
        { name: "Amaranth",     image: "media/crops/Amaranth.png",      season: "Fall", growthDays: 7, regrow: 0, sellPrice: 150, seedCost: 70 },
        { name: "Artichoke",    image: "media/crops/Artichoke.png",     season: "Fall", growthDays: 8, regrow: 0, sellPrice: 160, seedCost: 30 },
        { name: "Beet",         image: "media/crops/Beet.png",          season: "Fall", growthDays: 6, regrow: 0, sellPrice: 100, seedCost: 20 },
        { name: "Bok Choy",     image: "media/crops/Bok_Choy.png",      season: "Fall", growthDays: 4, regrow: 0, sellPrice: 80, seedCost: 50 },
        { name: "Cranberries",  image: "media/crops/Cranberries.png",   season: "Fall", growthDays: 7, regrow: 5, sellPrice: 75, seedCost: 240 },
        { name: "Eggplant",     image: "media/crops/Eggplant.png",      season: "Fall", growthDays: 5, regrow: 5, sellPrice: 60, seedCost: 20 },
        { name: "Fairy Rose",   image: "media/crops/Fairy_Rose.png",    season: "Fall", growthDays: 12, regrow: 0, sellPrice: 290, seedCost: 200 },
        { name: "Grape",        image: "media/crops/Grape.png",         season: "Fall", growthDays: 10, regrow: 3, sellPrice: 80, seedCost: 60 },
        { name: "Pumpkin",      image: "media/crops/Pumpkin.png",       season: "Fall", growthDays: 13, regrow: 0, sellPrice: 320, seedCost: 100 },
        { name: "Sweet Gem Berry", image: "media/crops/Sweet_Gem_Berry.png", season: "Fall", growthDays: 24, regrow: 0, sellPrice: 3000, seedCost: 1000 },
        { name: "Yam",          image: "media/crops/Yam.png",           season: "Fall", growthDays: 10, regrow: 0, sellPrice: 160, seedCost: 60 },

        // Winter Crops
        { name: "Powdermelon",  image: "media/crops/Powdermelon.png", season: "Winter", growthDays: 7, regrow: 0, sellPrice: 60, seedCost: 0 },
        
        // Special/Multi-season
        { name: "Ancient Fruit", image: "media/crops/Ancient_Fruit.png", season: "Spring/Summer/Fall", growthDays: 28, regrow: 7, sellPrice: 550, seedCost: 0 },
        { name: "Coffee Bean",  image: "media/crops/Coffee_Bean.png",   season: "Spring/Summer", growthDays: 10, regrow: 2, sellPrice: 15, seedCost: 2500 },
        { name: "Cactus Fruit", image: "media/crops/Cactus_Fruit.png",  season: "Summer", growthDays: 12, regrow: 3, sellPrice: 75, seedCost: 150 },
        { name: "Corn",         image: "media/crops/Corn.png",          season: "Summer/Fall", growthDays: 14, regrow: 4, sellPrice: 50, seedCost: 150 },
        { name: "Fiber",        image: "media/crops/Fiber.png",         season: "All", growthDays: 7, regrow: 0, sellPrice: 1, seedCost: 0 },
    ];

    function loadCrops() {
        const select = document.getElementById('cropSelect');
        crops.forEach(crop => {
            select.innerHTML += `<option value="${crop.name}">${crop.name} (${crop.season})</option>`;
        });
    }

    function calculateProfit() {
        const cropName = document.getElementById('cropSelect').value;
        const count = parseInt(document.getElementById('cropCount').value) || 0;
        const crop = crops.find(c => c.name === cropName);
        
        if (!crop) {
            document.getElementById('profitResult').innerHTML = "Please select a crop";
            return;
        }

        const daysInSeason = 28;
        let harvests = 1;
        
        if (crop.regrow > 0) 
            harvests += Math.floor((daysInSeason - crop.growthDays) / crop.regrow);
        
        const totalProduce = count * harvests;
        const grossProfit = totalProduce * crop.sellPrice;
        const seedCost = crop.seedCost * count;
        const netProfit = grossProfit - seedCost;

        document.getElementById('profitResult').innerHTML = `
            <br>
            <img src="${crop.image}">
            <h3 class="profit-header">${crop.name}</h3>
            <div class="profit-item">
                <span class="profit-label">Total Harvests:</span>
                <span class="profit-value">${harvests}</span>
            </div>
            <div class="profit-item">
                <span class="profit-label">Growth Time:</span>
                <span class="profit-value">${crop.growthDays} days</span>
            </div>
            <div class="profit-item">
                <span class="profit-label">Gross Profit:</span>
                <span class="profit-value">${grossProfit}g</span>
            </div>
            <div class="profit-item">
                <span class="profit-label">Seed Cost:</span>
                <span class="profit-value">${seedCost}g</span>
            </div>
            <div class="profit-item" style="border-bottom: none; padding-top: 15px;">
                <span class="profit-label" style="font-size: 1.1em; font-weight:bold">Net Profit:</span>
                <span class="profit-value" style="color: #4a6b3a; font-size: 1.2em;">
                    ${netProfit}g
                </span>
            </div>
        `;
    }

    //Community center bundles
    const bundles = [
        { room: "Crafts Room", image: "media/bundles/Crafts_Room.png",
            bundles: [
                { name: "Spring Forage Bundle", image: "media/bundles/Spring_Foraging_Bundle.png",  items: ["Wild Horseradish", "Daffodil", "Leek", "Dandelion"] },
                { name: "Summer Forage Bundle", image: "media/bundles/Summer_Foraging_Bundle.png",  items: ["Grape", "Spice Berry", "Sweet Pea"] },
                { name: "Fall Forage Bundle",   image: "media/bundles/Fall_Foraging_Bundle.png",    items: ["Common Mushroom", "Wild Plum", "Hazelnut", "Blackberry"] },
                { name: "Winter Forage Bundle", image: "media/bundles/Winter_Foraging_Bundle.png",  items: ["Winter Root", "Crystal Fruit", "Snow Yam", "Crocus"] },
                { name: "Construction Bundle",  image: "media/bundles/Construction_Bundle.png",     items: ["Wood (99)", "Wood (99)", "Stone (99)", "Hardwood (10)"] },
                { name: "Exotic Forage Bundle", image: "media/bundles/Exotic_Foraging_Bundle.png",  items: ["Coconut", "Cactus Fruit", "Cave Carrot", "Red Mushroom", "Purple Mushroom", "Maple Syrup", "Oak Resin", "Pine Tar", "Morel"] }
            ]
        },
        { room: "Pantry", image: "media/bundles/Pantry.png",
            bundles: [
                { name: "Spring Crops Bundle",  image: "media/bundles/Spring_Crops_Bundle.png",     items: ["Parsnip", "Green Bean", "Cauliflower", "Potato"] },
                { name: "Summer Crops Bundle",  image: "media/bundles/Summer_Crops_Bundle.png",     items: ["Tomato", "Hot Pepper", "Blueberry", "Melon"] },
                { name: "Fall Crops Bundle",    image: "media/bundles/Fall_Crops_Bundle.png",       items: ["Corn", "Eggplant", "Pumpkin", "Yam"] },
                { name: "Quality Crops Bundle", image: "media/bundles/Quality_Crops_Bundle.png",    items: ["Gold Parsnip (5)", "Gold Melon (5)", "Gold Pumpkin (5)", "Gold Corn (5)"] },
                { name: "Animal Bundle",        image: "media/bundles/Animal_Bundle.png",           items: ["Large Milk", "Large Goat Milk", "Large Brown Egg", "Large Egg", "Wool", "Duck Egg"] },
                { name: "Artisan Bundle",       image: "media/bundles/Artisan_Bundle.png",          items: ["Truffle Oil", "Cloth", "Goat Cheese", "Cheese", "Honey", "Jelly", "Apple", "Apricot", "Orange", "Peach", "Pomegranate", "Cherry"] }
            ]
        },
        { room: "Fish Tank", image: "media/bundles/Fish_Tank.png",
            bundles: [
                { name: "River Fish Bundle",    image: "media/bundles/River_Fish_Bundle.png",       items: ["Sunfish", "Catfish", "Shad", "Tiger Trout"] },
                { name: "Lake Fish Bundle",     image: "media/bundles/Lake_Fish_Bundle.png",        items: ["Largemouth Bass", "Carp", "Bullhead", "Sturgeon"] },
                { name: "Ocean Fish Bundle",    image: "media/bundles/Ocean_Fish_Bundle.png",       items: ["Sardine", "Tuna", "Red Snapper", "Tilapia"] },
                { name: "Night Fish Bundle",    image: "media/bundles/Night_Fishing_Bundle.png",    items: ["Walleye", "Bream", "Eel"] },
                { name: "Crab Pot Bundle",      image: "media/bundles/Crab_Pot_Bundle.png",         items: ["Lobster", "Crayfish", "Crab", "Cockle", "Mussel", "Shrimp", "Snail", "Periwinkle", "Oyster", "Clam"] },
                { name: "Specialty Fish Bundle", image: "media/bundles/Specialty_Fish_Bundle.png",  items: ["Pufferfish", "Ghostfish", "Sandfish", "Woodskip"] }
            ]
        },
        { room: "Boiler Room", image: "media/bundles/Boiler_Room.png",
            bundles: [
                { name: "Blacksmith's Bundle",  image: "media/bundles/Blacksmith_Bundle.png",       items: ["Copper Bar (5)", "Iron Bar (5)", "Gold Bar (5)"] },
                { name: "Geologist's Bundle",   image: "media/bundles/Geologist's_Bundle.png",      items: ["Quartz", "Earth Crystal", "Frozen Tear", "Fire Quartz"] },
                { name: "Adventurer's Bundle",  image: "media/bundles/Adventurer's_Bundle.png",     items: ["Slime (99)", "Bat Wings (10)", "Solar Essence", "Void Essence"] }
            ]
        },
        { room: "Bulletin Board", image: "media/bundles/Bulletin_Board.png",
            bundles: [
                { name: "Chef's Bundle",        image: "media/bundles/Chef's_Bundle.png",           items: ["Maple Syrup", "Fiddlehead Fern", "Truffle", "Poppy", "Maki Roll", "Fried Egg"] },
                { name: "Dye Bundle",           image: "media/bundles/Dye_Bundle.png",              items: ["Red Mushroom", "Sea Urchin", "Sunflower", "Duck Feather", "Aquamarine", "Red Cabbage"] },
                { name: "Field Research Bundle", image: "media/bundles/Field_Research_Bundle.png",  items: ["Purple Mushroom", "Nautilus Shell", "Chub", "Frozen Geode"] },
                { name: "Fodder Bundle",        image: "media/bundles/Fodder_Bundle.png",           items: ["Wheat (10)", "Hay (10)", "Apple (3)"] },
                { name: "Enchanter's Bundle",   image: "media/bundles/Enchanter's_Bundle.png",      items: ["Oak Resin", "Wine", "Rabbit's Foot", "Pomegranate"] }
            ]
        }
    ];

    function loadBundles() {
        const container = document.getElementById('bundles');
        let html = '';

        bundles.forEach(room => {
            html += `
                <div class="villager-card" style="margin-bottom: 24px;">
                    <img src="${room.image}" width="60px">
                    <h3 style="margin-top: 0;">${room.room}</h3>
            `;

            room.bundles.forEach(bundle => {
                html += `<img src="${bundle.image}" width="18px"> &ensp; <b>${bundle.name}</b><br>`;
                bundle.items.forEach(item => {
                    html += `<label style="display: block;"><input type="checkbox"> ${item}</label>`;
                });
                html += `<br>`;
            });

            html += `</div>`;
        });

        container.innerHTML = html;
    }

    // Museum artifacts
    const artifacts = [
        { name: "Amphibian Fossil", image: "media/artifacts/Amphibian_Fossil.png",  location: "The Mountain/Cindersap Forest" },
        { name: "Anchor",           image: "media/artifacts/Anchor.png",            location: "The Beach" },
        { name: "Ancient Doll",     image: "media/artifacts/Ancient_Doll.png",      location: "The Mountain/Cindersap Forest/Bus Stop" },
        { name: "Ancient Drum",     image: "media/artifacts/Ancient_Drum.png",      location: "Cindersap Forest/Bus Stop/Pelican Town" },
        { name: "Ancient Seed",     image: "media/artifacts/Ancient_Seed.png",      location: "The Mountain/Cindersap Forest" },
        { name: "Ancient Sword",    image: "media/artifacts/Ancient_Sword.png",     location: "The Mountain/Cindersap Forest" },
        { name: "Arrowhead",        image: "media/artifacts/Arrowhead.png",         location: "The Mountain/Cindersap Forest/Bus Stop" },
        { name: "Bone Flute",       image: "media/artifacts/Bone_Flute.png",        location: "The Mountain/Cindersap Forest/Pelican Town" },
        { name: "Chewing Stick",    image: "media/artifacts/Chewing_Stick.png",     location: "The Mountain/Cindersap Forest/Pelican Town" },
        { name: "Chicken Statue",   image: "media/artifacts/Chicken_Statue.png",    location: "The Farm" },
        { name: "Chipped Amphora",  image: "media/artifacts/Chipped_Amphora.png",   location: "Pelican Town" },
        { name: "Dinosaur Egg",     image: "media/artifacts/Dinosaur_Egg.png",      location: "The Mountain" },
        { name: "Dried Starfish",   image: "media/artifacts/Dried_Starfish.png",    location: "The Beach" },
        { name: "Dwarf Gadget",     image: "media/artifacts/Dwarf_Gadget.png",      location: "Artifact Trove/Geode" },
        { name: "Dwarf Scroll I",   image: "media/artifacts/Dwarf_Scroll_I.png",    location: "The Mines" },
        { name: "Dwarf Scroll II",  image: "media/artifacts/Dwarf_Scroll_II.png",   location: "The Mines" },
        { name: "Dwarf Scroll III", image: "media/artifacts/Dwarf_Scroll_III.png",  location: "The Mines" },
        { name: "Dwarf Scroll IV", image: "media/artifacts/Dwarf_Scroll_IV.png",    location: "The Mines" },
        { name: "Dwarvish Helm",    image: "media/artifacts/Dwarvish_Helm.png",     location: "The Mines" },
        { name: "Elvish Jewelry",   image: "media/artifacts/Elvish_Jewelry.png",    location: "Cindersap Forest" },
        { name: "Glass Shards",     image: "media/artifacts/Glass_Shards.png",      location: "Artifact Trove/Fishing Chest" },
        { name: "Golden Mask",      image: "media/artifacts/Golden_Mask.png",       location: "Calico Desert" },
        { name: "Golden Relic",     image: "media/artifacts/Golden_Relic.png",      location: "Calico Desert" },
        { name: "Nautilus Shell",   image: "media/artifacts/Nautilus_Shell.png",    location: "The Beach" },
        { name: "Ornamental Fan",   image: "media/artifacts/Ornamental_Fan.png",    location: "The Beach/Cindersap Forest/Pelican Town" },
        { name: "Palm Fossil",      image: "media/artifacts/Palm_Fossil.png",       location: "Calico Desert/Cindersap Forest/The Beach" },
        { name: "Prehistoric Handaxe", image: "media/artifacts/Prehistoric_Handaxe.png", location: "The Mountain/Cindersap Forest/Bus Stop" },
        { name: "Prehistoric Rib",  image: "media/artifacts/Prehistoric_Rib.png",   location: "Pelican Town/The Farm" },
        { name: "Prehistoric Scapula", image: "media/artifacts/Prehistoric_Scapula.png", location: "Cindersap Forest/Pelican Town" },
        { name: "Prehistoric Skull", image: "media/artifacts/Prehistoric_Skull.png", location: "The Mountain" },
        { name: "Prehistoric Tibia", image: "media/artifacts/Prehistoric_Tibia.png", location: "Railroad/Cindersap Forest" },
        { name: "Prehistoric Tool", image: "media/artifacts/Prehistoric_Tool.png",  location: "The Mountain/Cindersap Forest/Bus Stop" },
        { name: "Prehistoric Vertebra", image: "media/artifacts/Prehistoric_Vertebra.png", location: "Bus Stop" },
        { name: "Rare Disc",        image: "media/artifacts/Rare_Disc.png",         location: "Artifact Trove/Geode" },
        { name: "Rusty Cog",        image: "media/artifacts/Rusty_Cog.png",         location: "The Mountain" },
        { name: "Rusty Spoon",      image: "media/artifacts/Rusty_Spoon.png",       location: "Pelican Town" },
        { name: "Rusty Spur",       image: "media/artifacts/Rusty_Spur.png",        location: "The Farm" },
        { name: "Skeletal Hand",    image: "media/artifacts/Skeletal_Hand.png",     location: "The Backwoods/The Beach" },
        { name: "Skeletal Tail",    image: "media/artifacts/Skeletal_Tail.png",     location: "Fishing Chest" },
        { name: "Strange Doll (Green)", image: "media/artifacts/Strange_Doll_(green).png", location: "Anywhere" },
        { name: "Strange Doll (Yellow)", image: "media/artifacts/Strange_Doll_(yellow).png", location: "Anywhere" },
        { name: "Trilobite",        image: "media/artifacts/Trilobite.png",         location: "The Mountain/Cindersap Forest/The Beach" }
    ];

    function loadArtifacts() {
        const container = document.getElementById('artifactsList');
        
        const left = artifacts.slice(0, 21);
        const right = artifacts.slice(21);

        container.innerHTML = `
            <div style="display: flex; gap: 32px;">
                <div id="leftColumn" style="flex: 1;"></div>
                <div id="rightColumn" style="flex: 1;"></div>
            </div>
        `;

        const leftColumn = document.getElementById('leftColumn');
        const rightColumn = document.getElementById('rightColumn');

        function createArtifactHTML(artifact) {
            return `
                <div class="checklist" style="display: flex; align-items: center; padding: 4px 0; margin: 3px;">
                    <label style="flex: 0 0 250px; display: flex; align-items: center;">
                        <input type="checkbox" style="margin-right: 6px;">
                        <img src="${artifact.image}" width="25px" style="margin-right: 6px;">
                        <span>${artifact.name}</span>
                    </label>
                    <span style="font-style: italic;">${artifact.location}</span>
                </div>
            `;
        }

        left.forEach(a => { leftColumn.innerHTML += createArtifactHTML(a); });
        right.forEach(a => { rightColumn.innerHTML += createArtifactHTML(a); });
    }

    window.onload = () => {
        loadVillagers();
        loadCrops();
        loadBundles();
        loadArtifacts();
    }