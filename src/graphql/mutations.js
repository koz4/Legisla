/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAkty = /* GraphQL */ `
  mutation CreateAkty(
    $input: CreateAktyInput!
    $condition: ModelAktyConditionInput
  ) {
    createAkty(input: $input, condition: $condition) {
      id
      name
      type
      description
      date
      link
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAkty = /* GraphQL */ `
  mutation UpdateAkty(
    $input: UpdateAktyInput!
    $condition: ModelAktyConditionInput
  ) {
    updateAkty(input: $input, condition: $condition) {
      id
      name
      type
      description
      date
      link
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAkty = /* GraphQL */ `
  mutation DeleteAkty(
    $input: DeleteAktyInput!
    $condition: ModelAktyConditionInput
  ) {
    deleteAkty(input: $input, condition: $condition) {
      id
      name
      type
      description
      date
      link
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
