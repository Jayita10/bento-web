import type { Sequelize, Model } from "sequelize";
import { guild } from "./guild";
import type { guildAttributes, guildCreationAttributes } from "./guild";
import { guildMember } from "./guildMember";
import type { guildMemberAttributes, guildMemberCreationAttributes } from "./guildMember";
import { user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";

export {
  guild,
  guildMember,
  user,
};

export type {
  guildAttributes,
  guildCreationAttributes,
  guildMemberAttributes,
  guildMemberCreationAttributes,
  userAttributes,
  userCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  guild.initModel(sequelize);
  guildMember.initModel(sequelize);
  user.initModel(sequelize);

  guildMember.belongsTo(guild, { as: "guild", foreignKey: "guildID"});
  guild.hasMany(guildMember, { as: "guildMembers", foreignKey: "guildID"});
  guildMember.belongsTo(user, { as: "user", foreignKey: "userID"});
  user.hasMany(guildMember, { as: "guildMembers", foreignKey: "userID"});

  return {
    guild: guild,
    guildMember: guildMember,
    user: user,
  };
}
