import React from 'react'
import {Redirect} from "react-router-dom";
const Issue = ({ index, issues }) => {
    const issue = issues[index];
    if(!issue)
    {
       return <Redirect path='/'/>;
    }
    const dateFormater = (date) => {
        return new Date(date).toLocaleString();
    }
    return (
    <div style={{textAlign:"center"}}>
        <h3>Profile</h3>
        <div><img src={issue.user.avatar_url} alt={issue.user.id}/></div>
        <div><b>{issue.user.login}</b></div>
        <br/>
        <h4><b>Comment : {issue.title}</b></h4>
        <h4>Created at : {dateFormater(issue.created_at)}</h4>
        <h4>Updated at : {dateFormater(issue.updated_at)}</h4>
    </div>
    )
}

export default Issue;
