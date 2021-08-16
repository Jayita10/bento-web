import { DiscordAttachment, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';

export default function Bento() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='tzuwy'>
            ?bento
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            <strong>tzuwy</strong>, you can give someone a <strong>Bento Box 🍱</strong> again in 1 hours, 22 minutes and 16 seconds
            </DiscordMessage>
            <DiscordMessage profile='alonzo'>
            ?bento
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            You didn't specify a user to give the daily <strong>Bento 🍱</strong> to!
            </DiscordMessage>
            <DiscordMessage profile='alonzo'>
            ?bento <DiscordMention type='user'>tzuwy</DiscordMention>
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            <strong>alonzo</strong> just gave a <strong>Bento 🍱</strong> to <strong>tzuwy</strong>!
            <br />
            <strong>tzuwy</strong> has received <strong>48 Bento 🍱</strong> over time 😋
            <br />
            <strong>alonzo</strong> can give a <strong>Bento 🍱</strong> again in 12 hours.
            </DiscordMessage>
            <DiscordMessage profile='tzuwy'>
                <DiscordAttachment slot='attachments' url='https://cdn.discordapp.com/emojis/864322844342222858.gif?v=1' height={48} width={48}></DiscordAttachment>
            </DiscordMessage>
            <DiscordMessage profile='alonzo'>
                <DiscordAttachment slot='attachments' url='https://cdn.discordapp.com/emojis/864322844342222858.gif?v=1' height={48} width={48}></DiscordAttachment>
            </DiscordMessage>
        </DiscordMessages>
    )
}