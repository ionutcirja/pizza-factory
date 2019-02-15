import gql from 'graphql-tag';

export const GET_SIZES = gql`
  {
    pizzaSizes {
      name
    }
  }
`;

export const GET_SIZE_BY_NAME = gql`
  query pizzaSizeByName($name: PizzaSizes!) {
    pizzaSizeByName(name: $name) {
      maxToppings,
      basePrice,
      toppings {
        topping {
          name,
          price,
        },
        defaultSelected,
      }
    }
  }
`;
