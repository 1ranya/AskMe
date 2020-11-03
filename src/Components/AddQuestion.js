import React from 'react'

export default function Addquestion(props) {
    

    return (
        <>
            <section className="hero hero-addQuestion is-fullheight">
                <div className="container has-text-centered formQuestion">
                    <div class="field">
                        <label id="actionTitle" class="label">Action à faire</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-success" type="text" placeholder="Action" value=""/>
                            <span class="icon is-small is-left"> 
                                <i class="fas fa-exclamation"></i>
                            </span>
                        </div>
                    </div>
                
                    <div class="field">
                        <label id="questionAposerTitle" class="label">Question à poser</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-success" type="text" placeholder="Question" value=""/>
                            <span class="icon is-small is-left"> 
                                <i class="fas fa-exclamation"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
