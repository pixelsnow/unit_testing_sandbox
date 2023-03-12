<h1>Unit Tests with Jest <s>and React Testing Library</s> (pt 3)</h1>

<p>Jest
<li>https://jestjs.io/docs/getting-started</li></p>

<p>Jest Snapshots
<li>https://jestjs.io/docs/snapshot-testing </li></p>


<p><em>NOTE: create-react-app already installs and sets-up Jest but you will need to install react-test-renderer</em>
<br/><code>npm install --save-dev react-test-renderer</code></p>

<h2>Example Tests:</h2>

<p>Creating snapshots in Jest for testing React applications</p>
<li>https://circleci.com/blog/snapshot-testing-with-jest/</li>

<p><br/><em>NOTE: Jest snapshots only checks what is rendered to the DOM - <b>NOT</b> CSS changes. For most cases of CSS, you should use something like Cypress. (Exceptions https://stackoverflow.com/a/64639246)</em></p>

<h2>Want more practice?</h2>
<ul>
<li>add error testing for sum(2,numB)</li>
<li>add error messages to div() and sub() modules</li>
<li>add testing for div() and sub() modules</li>
<li>if we wrap error throwing in try...catch..., do the tests still work? do we need to change anything?</li>
<li>test other types of numbers (decimals?)</li>
</ul>
