// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateChat {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Chat {
  id: ID!
  title: String
  isGroup: Boolean!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  foto: File
  createdAt: DateTime
  updateAt: DateTime
}

type ChatConnection {
  pageInfo: PageInfo!
  edges: [ChatEdge]!
  aggregate: AggregateChat!
}

input ChatCreateInput {
  id: ID
  title: String
  isGroup: Boolean
  users: UserCreateManyWithoutChatInput
  messages: MessageCreateManyWithoutChatInput
  foto: FileCreateOneWithoutChatInput
  updateAt: DateTime
}

input ChatCreateManyWithoutUsersInput {
  create: [ChatCreateWithoutUsersInput!]
  connect: [ChatWhereUniqueInput!]
}

input ChatCreateOneWithoutFotoInput {
  create: ChatCreateWithoutFotoInput
  connect: ChatWhereUniqueInput
}

input ChatCreateOneWithoutMessagesInput {
  create: ChatCreateWithoutMessagesInput
  connect: ChatWhereUniqueInput
}

input ChatCreateWithoutFotoInput {
  id: ID
  title: String
  isGroup: Boolean
  users: UserCreateManyWithoutChatInput
  messages: MessageCreateManyWithoutChatInput
  updateAt: DateTime
}

input ChatCreateWithoutMessagesInput {
  id: ID
  title: String
  isGroup: Boolean
  users: UserCreateManyWithoutChatInput
  foto: FileCreateOneWithoutChatInput
  updateAt: DateTime
}

input ChatCreateWithoutUsersInput {
  id: ID
  title: String
  isGroup: Boolean
  messages: MessageCreateManyWithoutChatInput
  foto: FileCreateOneWithoutChatInput
  updateAt: DateTime
}

type ChatEdge {
  node: Chat!
  cursor: String!
}

enum ChatOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  isGroup_ASC
  isGroup_DESC
  createdAt_ASC
  createdAt_DESC
  updateAt_ASC
  updateAt_DESC
}

type ChatPreviousValues {
  id: ID!
  title: String
  isGroup: Boolean!
  createdAt: DateTime
  updateAt: DateTime
}

input ChatScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  isGroup: Boolean
  isGroup_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updateAt: DateTime
  updateAt_not: DateTime
  updateAt_in: [DateTime!]
  updateAt_not_in: [DateTime!]
  updateAt_lt: DateTime
  updateAt_lte: DateTime
  updateAt_gt: DateTime
  updateAt_gte: DateTime
  AND: [ChatScalarWhereInput!]
  OR: [ChatScalarWhereInput!]
  NOT: [ChatScalarWhereInput!]
}

type ChatSubscriptionPayload {
  mutation: MutationType!
  node: Chat
  updatedFields: [String!]
  previousValues: ChatPreviousValues
}

input ChatSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChatWhereInput
  AND: [ChatSubscriptionWhereInput!]
  OR: [ChatSubscriptionWhereInput!]
  NOT: [ChatSubscriptionWhereInput!]
}

input ChatUpdateInput {
  title: String
  isGroup: Boolean
  users: UserUpdateManyWithoutChatInput
  messages: MessageUpdateManyWithoutChatInput
  foto: FileUpdateOneWithoutChatInput
  updateAt: DateTime
}

input ChatUpdateManyDataInput {
  title: String
  isGroup: Boolean
  updateAt: DateTime
}

input ChatUpdateManyMutationInput {
  title: String
  isGroup: Boolean
  updateAt: DateTime
}

input ChatUpdateManyWithoutUsersInput {
  create: [ChatCreateWithoutUsersInput!]
  delete: [ChatWhereUniqueInput!]
  connect: [ChatWhereUniqueInput!]
  set: [ChatWhereUniqueInput!]
  disconnect: [ChatWhereUniqueInput!]
  update: [ChatUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [ChatUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [ChatScalarWhereInput!]
  updateMany: [ChatUpdateManyWithWhereNestedInput!]
}

input ChatUpdateManyWithWhereNestedInput {
  where: ChatScalarWhereInput!
  data: ChatUpdateManyDataInput!
}

input ChatUpdateOneRequiredWithoutMessagesInput {
  create: ChatCreateWithoutMessagesInput
  update: ChatUpdateWithoutMessagesDataInput
  upsert: ChatUpsertWithoutMessagesInput
  connect: ChatWhereUniqueInput
}

input ChatUpdateOneWithoutFotoInput {
  create: ChatCreateWithoutFotoInput
  update: ChatUpdateWithoutFotoDataInput
  upsert: ChatUpsertWithoutFotoInput
  delete: Boolean
  disconnect: Boolean
  connect: ChatWhereUniqueInput
}

input ChatUpdateWithoutFotoDataInput {
  title: String
  isGroup: Boolean
  users: UserUpdateManyWithoutChatInput
  messages: MessageUpdateManyWithoutChatInput
  updateAt: DateTime
}

input ChatUpdateWithoutMessagesDataInput {
  title: String
  isGroup: Boolean
  users: UserUpdateManyWithoutChatInput
  foto: FileUpdateOneWithoutChatInput
  updateAt: DateTime
}

input ChatUpdateWithoutUsersDataInput {
  title: String
  isGroup: Boolean
  messages: MessageUpdateManyWithoutChatInput
  foto: FileUpdateOneWithoutChatInput
  updateAt: DateTime
}

input ChatUpdateWithWhereUniqueWithoutUsersInput {
  where: ChatWhereUniqueInput!
  data: ChatUpdateWithoutUsersDataInput!
}

input ChatUpsertWithoutFotoInput {
  update: ChatUpdateWithoutFotoDataInput!
  create: ChatCreateWithoutFotoInput!
}

input ChatUpsertWithoutMessagesInput {
  update: ChatUpdateWithoutMessagesDataInput!
  create: ChatCreateWithoutMessagesInput!
}

input ChatUpsertWithWhereUniqueWithoutUsersInput {
  where: ChatWhereUniqueInput!
  update: ChatUpdateWithoutUsersDataInput!
  create: ChatCreateWithoutUsersInput!
}

input ChatWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  isGroup: Boolean
  isGroup_not: Boolean
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  foto: FileWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updateAt: DateTime
  updateAt_not: DateTime
  updateAt_in: [DateTime!]
  updateAt_not_in: [DateTime!]
  updateAt_lt: DateTime
  updateAt_lte: DateTime
  updateAt_gt: DateTime
  updateAt_gte: DateTime
  AND: [ChatWhereInput!]
  OR: [ChatWhereInput!]
  NOT: [ChatWhereInput!]
}

input ChatWhereUniqueInput {
  id: ID
}

scalar DateTime

type File {
  id: ID!
  secret: String!
  name: String
  size: Int
  url: String
  contentType: String
  user: User
  chat: Chat
  createdAt: DateTime
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  id: ID
  secret: String!
  name: String
  size: Int
  url: String
  contentType: String
  user: UserCreateOneWithoutFotoInput
  chat: ChatCreateOneWithoutFotoInput
}

input FileCreateOneWithoutChatInput {
  create: FileCreateWithoutChatInput
  connect: FileWhereUniqueInput
}

input FileCreateOneWithoutUserInput {
  create: FileCreateWithoutUserInput
  connect: FileWhereUniqueInput
}

input FileCreateWithoutChatInput {
  id: ID
  secret: String!
  name: String
  size: Int
  url: String
  contentType: String
  user: UserCreateOneWithoutFotoInput
}

input FileCreateWithoutUserInput {
  id: ID
  secret: String!
  name: String
  size: Int
  url: String
  contentType: String
  chat: ChatCreateOneWithoutFotoInput
}

type FileEdge {
  node: File!
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  secret_ASC
  secret_DESC
  name_ASC
  name_DESC
  size_ASC
  size_DESC
  url_ASC
  url_DESC
  contentType_ASC
  contentType_DESC
  createdAt_ASC
  createdAt_DESC
}

type FilePreviousValues {
  id: ID!
  secret: String!
  name: String
  size: Int
  url: String
  contentType: String
  createdAt: DateTime
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdateInput {
  secret: String
  name: String
  size: Int
  url: String
  contentType: String
  user: UserUpdateOneWithoutFotoInput
  chat: ChatUpdateOneWithoutFotoInput
}

input FileUpdateManyMutationInput {
  secret: String
  name: String
  size: Int
  url: String
  contentType: String
}

input FileUpdateOneWithoutChatInput {
  create: FileCreateWithoutChatInput
  update: FileUpdateWithoutChatDataInput
  upsert: FileUpsertWithoutChatInput
  delete: Boolean
  disconnect: Boolean
  connect: FileWhereUniqueInput
}

input FileUpdateOneWithoutUserInput {
  create: FileCreateWithoutUserInput
  update: FileUpdateWithoutUserDataInput
  upsert: FileUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: FileWhereUniqueInput
}

input FileUpdateWithoutChatDataInput {
  secret: String
  name: String
  size: Int
  url: String
  contentType: String
  user: UserUpdateOneWithoutFotoInput
}

input FileUpdateWithoutUserDataInput {
  secret: String
  name: String
  size: Int
  url: String
  contentType: String
  chat: ChatUpdateOneWithoutFotoInput
}

input FileUpsertWithoutChatInput {
  update: FileUpdateWithoutChatDataInput!
  create: FileCreateWithoutChatInput!
}

input FileUpsertWithoutUserInput {
  update: FileUpdateWithoutUserDataInput!
  create: FileCreateWithoutUserInput!
}

input FileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  secret: String
  secret_not: String
  secret_in: [String!]
  secret_not_in: [String!]
  secret_lt: String
  secret_lte: String
  secret_gt: String
  secret_gte: String
  secret_contains: String
  secret_not_contains: String
  secret_starts_with: String
  secret_not_starts_with: String
  secret_ends_with: String
  secret_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  contentType: String
  contentType_not: String
  contentType_in: [String!]
  contentType_not_in: [String!]
  contentType_lt: String
  contentType_lte: String
  contentType_gt: String
  contentType_gte: String
  contentType_contains: String
  contentType_not_contains: String
  contentType_starts_with: String
  contentType_not_starts_with: String
  contentType_ends_with: String
  contentType_not_ends_with: String
  user: UserWhereInput
  chat: ChatWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  text: String!
  sender: User!
  chat: Chat!
  createdAt: DateTime
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  id: ID
  text: String!
  sender: UserCreateOneWithoutMessagesInput!
  chat: ChatCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutChatInput {
  create: [MessageCreateWithoutChatInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutSenderInput {
  create: [MessageCreateWithoutSenderInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutChatInput {
  id: ID
  text: String!
  sender: UserCreateOneWithoutMessagesInput!
}

input MessageCreateWithoutSenderInput {
  id: ID
  text: String!
  chat: ChatCreateOneWithoutMessagesInput!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
}

type MessagePreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime
}

input MessageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  text: String
  sender: UserUpdateOneRequiredWithoutMessagesInput
  chat: ChatUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateManyDataInput {
  text: String
}

input MessageUpdateManyMutationInput {
  text: String
}

input MessageUpdateManyWithoutChatInput {
  create: [MessageCreateWithoutChatInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutChatInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutChatInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithoutSenderInput {
  create: [MessageCreateWithoutSenderInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutSenderInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutSenderInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutChatDataInput {
  text: String
  sender: UserUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateWithoutSenderDataInput {
  text: String
  chat: ChatUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutChatDataInput!
}

input MessageUpdateWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutSenderDataInput!
}

input MessageUpsertWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutChatDataInput!
  create: MessageCreateWithoutChatInput!
}

input MessageUpsertWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutSenderDataInput!
  create: MessageCreateWithoutSenderInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  sender: UserWhereInput
  chat: ChatWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createChat(data: ChatCreateInput!): Chat!
  updateChat(data: ChatUpdateInput!, where: ChatWhereUniqueInput!): Chat
  updateManyChats(data: ChatUpdateManyMutationInput!, where: ChatWhereInput): BatchPayload!
  upsertChat(where: ChatWhereUniqueInput!, create: ChatCreateInput!, update: ChatUpdateInput!): Chat!
  deleteChat(where: ChatWhereUniqueInput!): Chat
  deleteManyChats(where: ChatWhereInput): BatchPayload!
  createFile(data: FileCreateInput!): File!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  deleteFile(where: FileWhereUniqueInput!): File
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  chat(where: ChatWhereUniqueInput!): Chat
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat]!
  chatsConnection(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatConnection!
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  ADMIN
  USER
}

type Subscription {
  chat(where: ChatSubscriptionWhereInput): ChatSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  password: String!
  email: String!
  role: Role!
  chat(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  foto: File
  createdAt: DateTime
  updateAt: DateTime
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  password: String
  email: String!
  role: Role
  chat: ChatCreateManyWithoutUsersInput
  messages: MessageCreateManyWithoutSenderInput
  foto: FileCreateOneWithoutUserInput
  updateAt: DateTime
}

input UserCreateManyWithoutChatInput {
  create: [UserCreateWithoutChatInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutFotoInput {
  create: UserCreateWithoutFotoInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChatInput {
  id: ID
  name: String!
  password: String
  email: String!
  role: Role
  messages: MessageCreateManyWithoutSenderInput
  foto: FileCreateOneWithoutUserInput
  updateAt: DateTime
}

input UserCreateWithoutFotoInput {
  id: ID
  name: String!
  password: String
  email: String!
  role: Role
  chat: ChatCreateManyWithoutUsersInput
  messages: MessageCreateManyWithoutSenderInput
  updateAt: DateTime
}

input UserCreateWithoutMessagesInput {
  id: ID
  name: String!
  password: String
  email: String!
  role: Role
  chat: ChatCreateManyWithoutUsersInput
  foto: FileCreateOneWithoutUserInput
  updateAt: DateTime
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  email_ASC
  email_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updateAt_ASC
  updateAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  password: String!
  email: String!
  role: Role!
  createdAt: DateTime
  updateAt: DateTime
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updateAt: DateTime
  updateAt_not: DateTime
  updateAt_in: [DateTime!]
  updateAt_not_in: [DateTime!]
  updateAt_lt: DateTime
  updateAt_lte: DateTime
  updateAt_gt: DateTime
  updateAt_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  password: String
  email: String
  role: Role
  chat: ChatUpdateManyWithoutUsersInput
  messages: MessageUpdateManyWithoutSenderInput
  foto: FileUpdateOneWithoutUserInput
  updateAt: DateTime
}

input UserUpdateManyDataInput {
  name: String
  password: String
  email: String
  role: Role
  updateAt: DateTime
}

input UserUpdateManyMutationInput {
  name: String
  password: String
  email: String
  role: Role
  updateAt: DateTime
}

input UserUpdateManyWithoutChatInput {
  create: [UserCreateWithoutChatInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutChatInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutChatInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutFotoInput {
  create: UserCreateWithoutFotoInput
  update: UserUpdateWithoutFotoDataInput
  upsert: UserUpsertWithoutFotoInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutChatDataInput {
  name: String
  password: String
  email: String
  role: Role
  messages: MessageUpdateManyWithoutSenderInput
  foto: FileUpdateOneWithoutUserInput
  updateAt: DateTime
}

input UserUpdateWithoutFotoDataInput {
  name: String
  password: String
  email: String
  role: Role
  chat: ChatUpdateManyWithoutUsersInput
  messages: MessageUpdateManyWithoutSenderInput
  updateAt: DateTime
}

input UserUpdateWithoutMessagesDataInput {
  name: String
  password: String
  email: String
  role: Role
  chat: ChatUpdateManyWithoutUsersInput
  foto: FileUpdateOneWithoutUserInput
  updateAt: DateTime
}

input UserUpdateWithWhereUniqueWithoutChatInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutChatDataInput!
}

input UserUpsertWithoutFotoInput {
  update: UserUpdateWithoutFotoDataInput!
  create: UserCreateWithoutFotoInput!
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserUpsertWithWhereUniqueWithoutChatInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutChatDataInput!
  create: UserCreateWithoutChatInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  chat_every: ChatWhereInput
  chat_some: ChatWhereInput
  chat_none: ChatWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  foto: FileWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updateAt: DateTime
  updateAt_not: DateTime
  updateAt_in: [DateTime!]
  updateAt_not_in: [DateTime!]
  updateAt_lt: DateTime
  updateAt_lte: DateTime
  updateAt_gt: DateTime
  updateAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`