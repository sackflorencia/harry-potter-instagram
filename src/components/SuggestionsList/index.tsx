import type { Profile } from "../../interfaces/Profile"
import ProfilePreview from "./ProfilePreview"
import "./SuggestionList.css"


/*MODIFICADO CON IA*/
const SuggestionsList = ({profiles}: {profiles: Profile[]}) =>{
    return (
        <div className="suggestions-container">
            <div className="suggestions-header">
                <p className="suggestions-title">Suggestions for you</p>
                <span className="suggestions-see-all">See All</span>
            </div>
            <div className="suggestions-items">
                {profiles.map(profile => (
                    <ProfilePreview key={profile.id} profile={profile} />
                ))}
            </div>
        </div>
    )
}
export default SuggestionsList