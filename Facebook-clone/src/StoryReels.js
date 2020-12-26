import React from 'react'
import './StoryReels.css'
import Story from './Story'
function StoryReels() {
    return (
        <div className = 'storyreels'>
            <Story image = 'https://i.pinimg.com/originals/11/aa/31/11aa3158953f2bebd9d27e351f64b1df.jpg' title = 'Ronaldo' profilesrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDce8VtpH3xXhwzxEHGKm8M1QA2q9j7WcDA&usqp=CAU'></Story>
            <Story image = 'https://i.pinimg.com/originals/53/76/f0/5376f00bc770c602e504a47314d620b8.jpg' title = 'Thalapathy vijay' profilesrc = 'https://images.indianexpress.com/2020/11/Master-teaser-1200.jpg'></Story>
            <Story image = 'https://pbs.twimg.com/media/DCMCo4OXoAADlQZ.jpg' title = 'virat_Kohli' profilesrc = 'https://pbs.twimg.com/profile_images/1308286636468219904/a61d79ts.jpg'></Story>
            <Story image = 'https://cdn.dribbble.com/users/986811/screenshots/4601947/argentina_leo_messi.png?compress=1&resize=400x300' title = 'Messi' profilesrc = 'https://cdn.dribbble.com/users/986811/screenshots/4601947/argentina_leo_messi.png?compress=1&resize=400x300'></Story>
            <Story image = 'https://www.fillgap.news/wp-content/uploads/2020/04/Top-6-Most-Beautiful-Actresses-in-the-World-fillgapnews-featured-0.jpg' title = 'Emma watson' profilesrc = 'https://image.shutterstock.com/image-vector/business-girls-avatar-260nw-1048121338.jpg'></Story>
        </div>
    )
}

export default StoryReels
