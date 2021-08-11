import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { guildMember, guildMemberId } from './guildMember';

export interface guildAttributes {
  guildID: number;
  guildName: string;
  prefix: string;
  tiktok: boolean;
  nsfw: boolean;
  leaderboard: boolean;
  media: boolean;
}

export type guildPk = "guildID";
export type guildId = guild[guildPk];
export type guildCreationAttributes = Optional<guildAttributes, guildPk>;

export class guild extends Model<guildAttributes, guildCreationAttributes> implements guildAttributes {
  guildID!: number;
  guildName!: string;
  prefix!: string;
  tiktok!: boolean;
  nsfw!: boolean;
  leaderboard!: boolean;
  media!: boolean;

  // guild hasMany guildMember via guildID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof guild {
    guild.init({
    guildID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    guildName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    prefix: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    tiktok: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    nsfw: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    leaderboard: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    media: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'guild',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "guild_guildid_uindex",
        unique: true,
        fields: [
          { name: "guildID" },
        ]
      },
      {
        name: "guild_pk",
        unique: true,
        fields: [
          { name: "guildID" },
        ]
      },
    ]
  });
  return guild;
  }
}
