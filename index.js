import React, {useState, useEffect} from 'react';


const Index = () => {
const [offsetY, setOffsetY] = useState(0)

const handleScroll = () => setOffsetY(window.scrollY);
useEffect(() => {
window.addEventListener('scroll', handleScroll)

return = () => window.addEventListener('scroll', handleScroll)
}, [])

return (
<div>Test</div>
)
}
