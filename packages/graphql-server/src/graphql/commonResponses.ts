export const REPO_ALREADY_IN_DB_RESPONSE = {
  message: 'This repo is already in the database.',
  code: '409'
}

export const BAD_USER_RESPONSE = {
  message: 'The graphQL resolver did not receive a valid user.',
  code: '400',
  hint: 'Are you loggedIn?'
}

export const BOOKMARK_DOES_NOT_EXIST_RESPONSE = {
  message: 'This bookmark does not exist on the database.',
  code: '409'
}

export const BAD_URL_RESPONSE = {
  message: 'The URL you provided is not valid.',
  code: '400'
}

export const INTERNAL_SERVER_ERROR = {
  code: '500'
}

export const BOOKMARK_ALREADY_EXISTS_RESPONSE = {
  message: 'You have already bookmarked this project.',
  code: '409'
}
