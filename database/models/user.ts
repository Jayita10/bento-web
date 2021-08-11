import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { guildMember, guildMemberId } from './guildMember';

export interface userAttributes {
  userID: number;
  discriminator: string;
  xp: number;
  level: number;
  username?: string;
}

export type userPk = "userID";
export type userId = user[userPk];
export type userCreationAttributes = Optional<userAttributes, userPk>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  userID!: number;
  discriminator!: string;
  xp!: number;
  level!: number;
  username?: string;

  // user hasMany guildMember via userID
  guildMembers!: guildMember[];
  getGuildMembers!: Sequelize.HasManyGetAssociationsMixin<guildMember>;
  setGuildMembers!: Sequelize.HasManySetAssociationsMixin<guildMember, guildMemberId>;
  addGuildMember!: Sequelize.HasManyAddAssociationMixin<guildMember, guildMemberId>;
  addGuildMembers!: Sequelize.HasManyAddAssociationsMixin<guildMember, guildMemberId>;
  createGuildMember!: Sequelize.HasManyCreateAssociationMixin<guildMember>;
  removeGuildMember!: Sequelize.HasManyRemoveAssociationMixin<guildMember, guildMemberId>;
  removeGuildMembers!: Sequelize.HasManyRemoveAssociationsMixin<guildMember, guildMemberId>;
  hasGuildMember!: Sequelize.HasManyHasAssociationMixin<guildMember, guildMemberId>;
  hasGuildMembers!: Sequelize.HasManyHasAssociationsMixin<guildMember, guildMemberId>;
  countGuildMembers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    user.init({
    userID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    discriminator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    xp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_pk",
        unique: true,
        fields: [
          { name: "userID" },
        ]
      },
      {
        name: "user_userid_uindex",
        unique: true,
        fields: [
          { name: "userID" },
        ]
      },
    ]
  });
  return user;
  }
}
