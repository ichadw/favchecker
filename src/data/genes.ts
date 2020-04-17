export enum FlowerNames {
  rose,
  cosmos,
  lily,
  pansy,
  hyacinth,
  tulip,
  mum,
  windflower,
}

export const SeedGenes: {
  [key: number]: { [key: string]: string }
} = {
  [FlowerNames.windflower]: {
    'white': '01 00 00 01',
    'orange': '00 00 11 00',
    'red': '00 11 00 00',
  },
  [FlowerNames.mum]: {
    'white': '01 00 00 01',
    'yellow': '00 00 11 00',
    'red': '00 11 00 00',
  },
  [FlowerNames.tulip]: {
    'white': '01 00 00 01',
    'yellow': '00 00 11 00',
    'red': '01 11 00 01',
  },
  [FlowerNames.hyacinth]: {
    'white': '01 00 00 01',
    'yellow': '00 00 11 00',
    'red': '01 11 00 01',
  },
  [FlowerNames.pansy]: {
    'white': '01 00 00 01',
    'yellow': '00 00 11 00',
    'red': '00 11 00 00',
  },
  [FlowerNames.lily]: {
    'white': '11 00 00 11',
    'yellow': '00 00 11 00',
    'red': '01 11 00 01',
  },
  [FlowerNames.cosmos]: {
    'white': '01 00 00 01',
    'yellow': '01 00 11 01',
    'red': '00 11 00 00',
  },
  [FlowerNames.rose]: {
    'white': '00 00 01 00',
    'yellow': '00 11 00 00',
    'red': '11 00 00 01',
  },
};

interface GeneDataInterface {
  [key: number]: { [key: string]: string }
}
export const Genes: GeneDataInterface = {
  [FlowerNames.windflower]: {
    '00 00 00': 'white',
    '00 00 01': 'white',
    '00 00 11': 'blue',
    '00 01 00': 'orange',
    '00 01 01': 'orange',
    '00 01 11': 'blue',
    '00 11 00': 'orange',
    '00 11 01': 'orange',
    '00 11 11': 'orange',
    '01 00 00': 'red',
    '01 00 01': 'red',
    '01 00 11': 'blue',
    '01 01 00': 'pink',
    '01 01 01': 'pink',
    '01 01 11': 'pink',
    '01 11 00': 'orange',
    '01 11 01': 'orange',
    '01 11 11': 'orange',
    '11 00 00': 'red',
    '11 00 01': 'red',
    '11 00 11': 'purple',
    '11 01 00': 'red',
    '11 01 01': 'red',
    '11 01 11': 'purple',
    '11 11 00': 'pink',
    '11 11 01': 'pink',
    '11 11 11': 'purple',
  },
  [FlowerNames.mum]: {
    '00 00 00': 'white',
    '00 00 01': 'white',
    '00 00 11': 'purple',
    '00 01 00': 'yellow',
    '00 01 01': 'yellow',
    '00 01 11': 'white',
    '00 11 00': 'yellow',
    '00 11 01': 'yellow',
    '00 11 11': 'yellow',
    '01 00 00': 'pink',
    '01 00 01': 'pink',
    '01 00 11': 'pink',
    '01 01 00': 'yellow',
    '01 01 01': 'red',
    '01 01 11': 'pink',
    '01 11 00': 'purple',
    '01 11 01': 'purple',
    '01 11 11': 'purple',
    '11 00 00': 'red',
    '11 00 01': 'red',
    '11 00 11': 'red',
    '11 01 00': 'purple',
    '11 01 01': 'purple',
    '11 01 11': 'red',
    '11 11 00': 'green',
    '11 11 01': 'green',
    '11 11 11': 'red',
  },
  [FlowerNames.tulip]: {
    '00 00 00': 'white',
    '00 00 01': 'white',
    '00 00 11': 'white',
    '00 01 00': 'yellow',
    '00 01 01': 'yellow',
    '00 01 11': 'white',
    '00 11 00': 'yellow',
    '00 11 01': 'yellow',
    '00 11 11': 'yellow',
    '01 00 00': 'red',
    '01 00 01': 'pink',
    '01 00 11': 'white',
    '01 01 00': 'orange',
    '01 01 01': 'yellow',
    '01 01 11': 'yellow',
    '01 11 00': 'orange',
    '01 11 01': 'yellow',
    '01 11 11': 'yellow',
    '11 00 00': 'black',
    '11 00 01': 'red',
    '11 00 11': 'red',
    '11 01 00': 'black',
    '11 01 01': 'red',
    '11 01 11': 'red',
    '11 11 00': 'purple',
    '11 11 01': 'purple',
    '11 11 11': 'purple',
  },
  [FlowerNames.hyacinth]: {
    '00 00 00': 'white',
    '00 00 01': 'white',
    '00 00 11': 'blue',
    '00 01 00': 'yellow',
    '00 01 01': 'yellow',
    '00 01 11': 'white',
    '00 11 00': 'yellow',
    '00 11 01': 'yellow',
    '00 11 11': 'yellow',
    '01 00 00': 'red',
    '01 00 01': 'pink',
    '01 00 11': 'white',
    '01 01 00': 'orange',
    '01 01 01': 'yellow',
    '01 01 11': 'yellow',
    '01 11 00': 'orange',
    '01 11 01': 'yellow',
    '01 11 11': 'yellow',
    '11 00 00': 'red',
    '11 00 01': 'red',
    '11 00 11': 'red',
    '11 01 00': 'blue',
    '11 01 01': 'red',
    '11 01 11': 'red',
    '11 11 00': 'purple',
    '11 11 01': 'purple',
    '11 11 11': 'purple',
  },
  [FlowerNames.pansy]: {
    '00 00 00': 'white',
    '00 00 01': 'white',
    '00 00 11': 'blue',
    '00 01 00': 'yellow',
    '00 01 01': 'yellow',
    '00 01 11': 'blue',
    '00 11 00': 'yellow',
    '00 11 01': 'yellow',
    '00 11 11': 'yellow',
    '01 00 00': 'red',
    '01 00 01': 'red',
    '01 00 11': 'blue',
    '01 01 00': 'orange',
    '01 01 01': 'orange',
    '01 01 11': 'orange',
    '01 11 00': 'yellow',
    '01 11 01': 'yellow',
    '01 11 11': 'yellow',
    '11 00 00': 'red',
    '11 00 01': 'red',
    '11 00 11': 'purple',
    '11 01 00': 'red',
    '11 01 01': 'red',
    '11 01 11': 'purple',
    '11 11 00': 'orange',
    '11 11 01': 'orange',
    '11 11 11': 'purple',
  },
  [FlowerNames.lily]: {
    '00 00 00': 'white',
    '00 00 01': 'white',
    '00 00 11': 'white',
    '00 01 00': 'yellow',
    '00 01 01': 'white',
    '00 01 11': 'white',
    '00 11 00': 'yellow',
    '00 11 01': 'yellow',
    '00 11 11': 'white',
    '01 00 00': 'red',
    '01 00 01': 'pink',
    '01 00 11': 'white',
    '01 01 00': 'orange',
    '01 01 01': 'yellow',
    '01 01 11': 'yellow',
    '01 11 00': 'orange',
    '01 11 01': 'yellow',
    '01 11 11': 'yellow',
    '11 00 00': 'black',
    '11 00 01': 'red',
    '11 00 11': 'pink',
    '11 01 00': 'black',
    '11 01 01': 'red',
    '11 01 11': 'pink',
    '11 11 00': 'orange',
    '11 11 01': 'orange',
    '11 11 11': 'white',
  },
  [FlowerNames.cosmos]: {
    '00 00 00': 'white',
    '00 00 01': 'white',
    '00 00 11': 'white',
    '00 01 00': 'yellow',
    '00 01 01': 'yellow',
    '00 01 11': 'white',
    '00 11 00': 'yellow',
    '00 11 01': 'yellow',
    '00 11 11': 'yellow',
    '01 00 00': 'pink',
    '01 00 01': 'pink',
    '01 00 11': 'pink',
    '01 01 00': 'orange',
    '01 01 01': 'orange',
    '01 01 11': 'pink',
    '01 11 00': 'orange',
    '01 11 01': 'orange',
    '01 11 11': 'orange',
    '11 00 00': 'red',
    '11 00 01': 'red',
    '11 00 11': 'red',
    '11 01 00': 'orange',
    '11 01 01': 'orange',
    '11 01 11': 'red',
    '11 11 00': 'black',
    '11 11 01': 'black',
    '11 11 11': 'red',
  },
  [FlowerNames.rose]: {
    '00 00 00 00': 'white',
    '00 00 00 01': 'white',
    '00 00 00 11': 'white',
    '00 00 01 00': 'white',
    '00 00 01 01': 'white',
    '00 00 01 11': 'white',
    '00 00 11 00': 'purple',
    '00 00 11 01': 'purple',
    '00 00 11 11': 'purple',
    '00 01 00 00': 'yellow',
    '00 01 00 01': 'yellow',
    '00 01 00 11': 'yellow',
    '00 01 01 00': 'white',
    '00 01 01 01': 'white',
    '00 01 01 11': 'white',
    '00 01 11 00': 'purple',
    '00 01 11 01': 'purple',
    '00 01 11 11': 'purple',
    '00 11 00 00': 'yellow',
    '00 11 00 01': 'yellow',
    '00 11 00 11': 'yellow',
    '00 11 01 00': 'yellow',
    '00 11 01 01': 'yellow',
    '00 11 01 11': 'yellow',
    '00 11 11 00': 'white',
    '00 11 11 01': 'white',
    '00 11 11 11': 'white',
    '01 00 00 00': 'red',
    '01 00 00 01': 'pink',
    '01 00 00 11': 'white',
    '01 00 01 00': 'red',
    '01 00 01 01': 'pink',
    '01 00 01 11': 'white',
    '01 00 11 00': 'red',
    '01 00 11 01': 'pink',
    '01 00 11 11': 'purple',
    '01 01 00 00': 'orange',
    '01 01 00 01': 'yellow',
    '01 01 00 11': 'yellow',
    '01 01 01 00': 'red',
    '01 01 01 01': 'pink',
    '01 01 01 11': 'white',
    '01 01 11 00': 'red',
    '01 01 11 01': 'pink',
    '01 01 11 11': 'purple',
    '01 11 00 00': 'orange',
    '01 11 00 01': 'yellow',
    '01 11 00 11': 'yellow',
    '01 11 01 00': 'orange',
    '01 11 01 01': 'yellow',
    '01 11 01 11': 'yellow',
    '01 11 11 00': 'red',
    '01 11 11 01': 'pink',
    '01 11 11 11': 'white',
    '11 00 00 00': 'black',
    '11 00 00 01': 'red',
    '11 00 00 11': 'pink',
    '11 00 01 00': 'black',
    '11 00 01 01': 'red',
    '11 00 01 11': 'pink',
    '11 00 11 00': 'black',
    '11 00 11 01': 'red',
    '11 00 11 11': 'pink',
    '11 01 00 00': 'orange',
    '11 01 00 01': 'orange',
    '11 01 00 11': 'yellow',
    '11 01 01 00': 'red',
    '11 01 01 01': 'red',
    '11 01 01 11': 'white',
    '11 01 11 00': 'black',
    '11 01 11 01': 'red',
    '11 01 11 11': 'purple',
    '11 11 00 00': 'orange',
    '11 11 00 01': 'orange',
    '11 11 00 11': 'yellow',
    '11 11 01 00': 'orange',
    '11 11 01 01': 'orange',
    '11 11 01 11': 'yellow',
    '11 11 11 00': 'blue',
    '11 11 11 01': 'red',
    '11 11 11 11': 'white',
  }
};
