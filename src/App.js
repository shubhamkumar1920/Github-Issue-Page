import {useState, useEffect } from 'react';
import { Container, Navbar, ListGroup } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Issue from './Components/issue';
function App() {
  const [issueList, setissueList] = useState([]);
  const [currIssueIndex, setCurrIssueIndex] = useState('');
  useEffect(() => {
   fetch("https://api.github.com/repos/facebook/create-react-app/issues")
   .then(response => response.json())
   .then(result => setissueList(result))
   .catch(error => setissueList([]));
  }, []);
  const handleIssueClick = (index)=>{
    setCurrIssueIndex(index);
  }
  return (
    <Router>
    <Container fluid>
      <Navbar bg="dark" variant="dark" className="text-white">
          <div className="col-5 mr-3"></div>
          <Link to='/'>
            <svg fill="#ffffff" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
              <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <span className="ml-1 text-white font-weight-bold">Github Issues Page</span>
          </Link>
      </Navbar>
      <Switch>
        <Route path="/" exact>
          <ListGroup>
            {issueList.map((issue, key) => (
              <ListGroup.Item key={key} onClick={()=>handleIssueClick(key)}>
                <svg fill="#2ea44f" className="mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
                <Link to='/issue' className="links text-dark font-weight-bold" id={key} >
                     {issue.title}
                </Link>
                <div className="ml-5" style={{float:"right" ,marginRight:"5vw"}}>
                  <svg className="mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" >
                    <path fill-rule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path>
                  </svg>
                  {issue.comments}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Route>
        <Route path="/issue" exact>
              <Issue index={currIssueIndex} issues={issueList}/>
        </Route>
        <Route default>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Container>
    </Router>
  );
}

export default App;
