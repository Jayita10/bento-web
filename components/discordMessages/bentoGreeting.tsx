import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';
import moment from 'moment'

export default function BentoGreeting() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' color="#f9d61b" authorName='Bento' authorImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' authorUrl='https://bento.com' embedTitle='Hello! My name is Bento 🍱' footerImage='https://cdn.discordapp.com/avatars/232584569289703424/a_d38527440ed3d5cd3a8045862472ff99.gif?size=1024' timestamp={moment().toDate()}>
                Thank you for choosing me to service your server!
                <br></br>
                My default prefix is <code>?</code>.
                <br></br>
                If the prefix is conflicting because of other bots, you can change it by writing <code>{`?prefix <NEW PREFIX>`}</code>
                <br></br>
                Use <code>?settings</code> to check what features I have enabled or disabled by default.
                <br></br>
                Use <code>?commands</code> to see a list of all my commands and <code>{`?help <command name>`}</code> to get help or info about a command.
                    <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Need help? Or do you have some ideas or feedback to Bento 🍱? Feel free to join the support server'><a href='https://discord.gg/dd68WwP'>https://discord.gg/dd68WwP</a></DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Want to check out the code for Bento 🍱?'><a href='https://github.com/thebentobot/bentoTS'>https://github.com/thebentobot/bentoTS</a></DiscordEmbedField>
                    </DiscordEmbedFields>
                    <span slot='footer'>Bento 🍱 is created by Banner#1017</span>
                </DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage profile='adam' highlight>Hello <DiscordMention>Bento</DiscordMention>! 😁</DiscordMessage>
        </DiscordMessages>
    )
}