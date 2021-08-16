import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';
import moment from 'moment'

export default function Help() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='lewis'>?help weather</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' color="#ffd903">
                    <strong>Command Name: </strong> weather
                    <br />
                    <strong>Aliases: </strong>
                    <br />
                    <strong>Description: </strong> Displays info about the weather at the city saved for the user, or at the specified city.
                    <br />
                    If it shows a city from another country than the one you expected, try to add a country code (e.g. US, GB, DE) beside the city (remember a comma after city), as shown below
                    <br />
                    If it does not show up either, it may not be included in the OpenWeather API.
                    <br />
                    <strong>Usage: </strong> ?weather [save] {`<city>`}, [country code]
                    <span slot="footer">{`<>`} = REQUIRED | [] = OPTIONAL  </span>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}