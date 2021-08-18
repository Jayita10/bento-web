import { DiscordAttachment, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';
import moment from 'moment'

export default function TikTok() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='fiji'><a href='https://vm.tiktok.com/ZMRdEmRU4/'>https://vm.tiktok.com/ZMRdEmRU4/</a></DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            <DiscordEmbed
							slot="embeds"
							url="https://www.youtube.com/watch?v=ocRVCN8hz_Q"
							video="https://cdn.discordapp.com/attachments/668454896051159070/876513809630638181/video.mp4"
							image="https://i.ytimg.com/vi/ocRVCN8hz_Q/maxresdefault.jpg"
						></DiscordEmbed>
                <DiscordEmbed slot='embeds' color="#00000" authorName='elirsteves' authorImage='https://miro.medium.com/max/764/1*AOKmaGtO23C4NaP7dDQiYg.png' embedTitle='Cooked the burgers #burgers #foodtime #geekingout #eliifyouseethissaycheeseburger'>
                <span slot="footer">Friday, July 19th 2019, 8:00 PM +00:00</span>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}