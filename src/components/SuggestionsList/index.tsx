import type { Profile } from "../../interfaces/Profile"
import ProfilePreview from "./ProfilePreview"

const SuggestionsList = ({profiles}: {profiles: Profile[]}) =>{
    return (
        <>
            {profiles.map(profile => (
                <ProfilePreview key={profile.id} profile={profile} />
            ))}
        </>
    )
}
export default SuggestionsList