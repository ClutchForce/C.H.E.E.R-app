// import "./options.css";
import { useNavigate } from "react-router-dom";
import { } from "../../../router/Approuter";

export default function Options() {

    const navigate = useNavigate()

    const handleInlineFeedToggle = () => {
        //navigate();
    }
    const handleGridFeedToggle = () => {
        //navigate();
    }
    const handleCreatePostButton = () => {
        //navigate();
    }
    const handleViewMessageButton = () => {
        //navigate();
    }

    return (
        <div className="options-card" >
            {/* Inline Feed Toggle */}
            <svg className="inline-feed-toggle"  viewBox="0 0 512 512" onClick={handleInlineFeedToggle}>
                <path d="M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z">
                </path>
            </svg>
            {/* Grid Feed Toggle */}
            <svg className="grid-feed-toggle" viewBox="0 0 448 512" onClick={handleGridFeedToggle}>
                <path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 96H256V224H384V96zM384 288H256V416H384V288zM192 224V96H64V224H192zM64 416H192V288H64V416z">
                </path>
            </svg>
            
            {/* Create Post Button */}
            <div className="create-post-button" onClick={handleCreatePostButton}>
                Create a Post
            </div>
            {/* View Message Button */}
            <div className="view-message-button" onClick={handleViewMessageButton}>
                View Messages
            </div>
        </div>
    );
}

// {/* Options */}
// <InlineFeedToggle />
// <GridFeedToggle />
// <CreatePostButton />
// <ViewMessageButton />
