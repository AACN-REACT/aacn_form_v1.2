

const fruits = [
    "pear",
    "apple",
    "orange",
    "strawberry",
    "kiwi",
    "grapes",
    "melon",
    "mango",
    "passion"
]


  const countries =  [   {
        name: "USA",
       
        key: "001",
        value: "USA"
      },
      {
        name: "UK",
        key: "002",
        selected: true, 
        value: "UK"
      },
      {
        name: "CANADA",
        key: "003",

        value: "CAN"
      }
    ]


const states = [
    { name: "Manchester",
      Parentkey: "002",
      selected:true,
      key: "001",
      value: "MAN"
    },
    { name: "Liverpool",
    Parentkey: "002",
    key: "002",
    value: "LVP"
  },
  {
    name: "California",
    Parentkey: "001",
    selected:true,
    key: "003",
    value: "CA"
  },
  {
    name: "Texas",
    Parentkey: "001",
    key: "004",
    value: "TEX"
  },
  {
    name: "London",
    Parentkey: "002",

    key: "005",
    value: "LON"
  },
  {
    name: "Ontario",
    Parentkey: "003",

    key: "006",
    value: "ONT"
  },
  {
    name: "Montreal",
    Parentkey: "003",
    selected:true,
    key: "007",
    value: "MONT"
  },
  
  
]
const bands =  [
    { name: "Smiths",
      Parentkey: "001",
      selected:true,
      key: "005",
      value: "MAN"
    },
    { name: "Beatles",
    Parentkey: "001",
    key: "006",
    value: "LVP"
  },
  { name: "Cure",
  Parentkey: "001",
  key: "005",
  value: "Cure"
},          
  {
    name: "Beachboys",
    Parentkey: "001",
    key: "001",
    value: "CA"
  },
  {
    name: "Slipknot",
    Parentkey: "001",
    key: "004",
    value: "TEX"
  },
  {
    name: "RollingStones",
    Parentkey: "002",

    key: "002",
    value: "LON"
  },
  {
    name: "national",
    Parentkey: "007",

    key: "003",
    value: "ONT"
  },
  {
    name: "They Might be Giants",
    Parentkey: "007",
    selected:true,
    key: "003",
    value: "MONT"
  },
  
  
]

const flowers =  [
    { name: "Roses",
      selected:true,
      Parentkey:"001",
      key: "005",
      value: "ROSE"
    },
    { name: "Daffodils",
    Parentkey:"002",
    key: "006",
    value: "DAF"
    },
    { name: "Tulips",
      selected:true,
      Parentkey:"003",
      key: "007",
      value: "TUL"
    },
    { name: "Chrysanthemum",
    selected:true,
    Parentkey:"001",
    key: "005",
    value: "CHRYS"
  },


]


const rooms = [
    {name:"Presidential", value:"PRS", key:"001",parentykey:"003"},
    {name:"Ambassador", value:"ABD", key:"002",parentykey:"003"},
    {name:"Executive", value:"ABD", key:"003",parentykey:"003"},
    {name:"Suite", value:"SUI", key:"004",parentykey:"001"},
    {name:"Honeymoon", value:"HON", key:"005",parentykey:"001"},
    {name:"Family", value:"FAM", key:"006",parentykey: ["001", "003"]},
    {name:"Single", value:"SIN", key:"007",parentykey: ["001", "003"]},
    {name:"Economy", value:"ECO", key:"008",parentykey: ["001", "003"]},
]

export {rooms,flowers,countries,states,fruits,bands}