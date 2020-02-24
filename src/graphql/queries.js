/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncAkties = /* GraphQL */ `
  query SyncAkties(
    $filter: ModelAktyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAkties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAkty = /* GraphQL */ `
  query GetAkty($id: ID!) {
    getAkty(id: $id) {
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
export const listAktys = /* GraphQL */ `
  query ListAktys(
    $filter: ModelAktyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAktys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
