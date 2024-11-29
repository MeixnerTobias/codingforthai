class CodingForThai {
  constructor() {
    this.spicyLevel = "Thai spicy";
  }

  // Demonstrates licensing concepts with a fun Thai twist
  generateSomTum() {
    const ingredients = [
      "papaya",
      "tomatoes",
      "green beans",
      "peanuts",
      "chili",
    ];
    return {
      name: "Developer's Som Tum",
      spicyLevel: this.spicyLevel,
      ingredients: ingredients,
      debuggingPower: Math.floor(Math.random() * 100),
    };
  }

  // A method that playfully references the license conditions
  performDebuggingRitual() {
    const dances = ["Ram Thai", "Fawn Thai", "Khon Dance"];
    return {
      music: "Luk Thung",
      dance: dances[Math.floor(Math.random() * dances.length)],
      debugSpirit: "Summoned! 👻",
    };
  }

  // Demonstrating license compliance
  checkLicenseCompliance() {
    return {
      copyrightNotice: "© 2024 Coding for Thai Developers",
      licensedUse: true,
      conditions: ["Respect the code", "Enjoy som tum", "Dance when debugging"],
    };
  }
}

module.exports = new CodingForThai();
