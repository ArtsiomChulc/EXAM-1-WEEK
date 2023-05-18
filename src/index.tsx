// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// type PropsType = {
// 	city: string        // 'minsk'
// 	country: string     // 'belarus'
// 	coords?: string     // '53.917501,27.604851'
// }

// export const Wrapper1 = () => {
// return <PropsComponent1 city='minsk' country={''} /> //! err country={''}
// }

// export const PropsComponent1: React.FC<PropsType> = (props) => {
// 	return <div>hello</div>
// }

// // Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки


// type PagePropsType = {
// 	age: number
// 	name: string
// 	avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
// 	return <User a={29} n={'lll'} />
// }
// type UserPropsType = {
// 	a: number
// 	n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
// 	return <div>name: {props.n}, age: {props.a}</div>
// }

// // Что нужно написать вместо xxx и yyy? 
// // Ответ дайте через пробел, например: blabla onClick(props)




// type UserWalletType = {
// 	title: string
// 	amount: number
// }
// type UserWalletPropsType = {
// 	wallet: UserWalletType
// }

// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
// 	return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }

// export const UserMoney = () => {
// 	const wallets = [
// 		{ title: 'bitcoin', amount: 1 },
// 		{ title: '$', amount: 100 }												
// 	]

// 	return <div>
// 		<UserWallet wallet={wallets[0]} />
// 		<UserWallet wallet={wallets[1]} />
// 	</div>
// }
// ReactDOM.render(
// 	<UserMoney />, document.getElementById('root')
// );


//Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках(bitcoin и $) ?

// Ответ дайте через пробел, например: props.x wallets



// import ReactDOM from 'react-dom'

// export const VideoHeader = (props: { videoName: string }) => {
// 	return <div>
// 		😀 {props.videoName}
// 	</div>
// }
// export const VideoContent = (props: { videoContent: string }) => {
// 	return <div>
// 		📼 <a href={props.videoContent}>{props.videoContent}</a>
// 	</div>
// }
// export const VideoDescription = (props: { videoDescription: string }) => {
// 	return <div>
// 		📑 {props.videoDescription}
// 	</div>
// }

// export const YoutubeVideo = (props: any) => {
// 	return <div>
// 		<VideoHeader videoName={props.video.title} />						
// 		<VideoContent videoContent={props.video.link} />
// 		<VideoDescription videoDescription={props.video.description} />
// 	</div>
// }

// export const App = () => {
// 	const video = {
// 		title: 'Samurai way',
// 		link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
// 		description: 'Best free react-course'
// 	}

// 	return <YoutubeVideo video={video} />
// }

// ReactDOM.render(<App />,
// 	document.getElementById('root')
// );
//Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?

//Ответ дайте через пробел, пример: a = { 12} ccc = { video.id } d = { 'hello'}

// import ReactDOM from 'react-dom'

// const CrazyButton = (props: any) => {

// 	const style = {
// 		color: props.fontColor,
// 		backgroundColor: props.bgColor
// 	}

// 	return <button style={style}>
// 		{props.title}
// 	</button>
// }

// export const App = () => {
// 	return <div>
// 		<CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'} />
// 		<CrazyButton title={'add'} fontColor={'white'} bgColor={'green'} />
// 	</div>
// }

// ReactDOM.render(<App />,
// 	document.getElementById('root')
// )

//Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел



// import ReactDOM from 'react-dom'

// const Son = (props: any) => {
//   return <div>
//     I am son. My name is {props.name}
//   </div>
// }


// const Father = (props: any) => {
//   return <div>
//     I am father. My name is {props.name}
//     <Son name={props.sonName} />
//   </div>
// }

// const Granny = (props: any) => {
//   return <div>
//     I am granny. My name is {props.name}
//     <Father name={props.fatherName} sonName={props.sonName} />
//   </div>
// }

// export const App = () => {
//   return <div>
//     <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'} />
//   </div>
// }

// ReactDOM.render(<App />,
//   document.getElementById('root')
// )

// //Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел

//! ======= ////// ======= /////// ======= /////// ======= /////// ===== /////


// import './index.css';

// import { link } from 'fs'
// import { title } from 'process'

// function UsersList() {
//   const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//   const users = results[0]
//   const setUsers = results[1]

//   return (
//     <p>Тут будет список пользователей</p>
//   )
// }

// ReactDOM.render(
//   <UsersList />, document.getElementById('root')
// );

// // Какой тип правильнее указать вместо "any" при типизации стэйта?


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
// 	const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

// 	return (
// 		<p>Тут будет список пользователей!</p>
// 	)
// }

// ReactDOM.render(
// 	<UsersList />, document.getElementById('root')
// );

// // Что вернёт выражение: typeof useState?
// console.log(typeof useState);


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
// 	const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
// 	console.log(results.length);										//! Почему 2
// 	const users = results[0]											
// 	const setUsers = results[1]

// 	return (
// 		<p>Тут будет список пользователей</p>
// 	)
// }

// ReactDOM.render(
// 	<UsersList />, document.getElementById('root')
// );

// Чему равно results.length?


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//   console.log(Array.isArray(users));

//   return (
//     <p>Тут будет список пользователей</p>
//   )
// }

// ReactDOM.render(
//   <UsersList />, document.getElementById('root')
// );
// // Что вернёт выражение: Array.isArray(users)?

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
// 	const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
// 	console.log(typeof setUsers);

// 	return (
// 		<p>Тут будет список пользователей</p>
// 	)
// }

// ReactDOM.render(
// 	<UsersList />, document.getElementById('root')
// );
// Что вернёт выражение: typeof setUsers?


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
// 	const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

// 	return (
// 		<main>
// 			<h4>User list:</h4>
// 			<ul>
// 				{users.map(user => <li>{user}</li>)}
// 			</ul>
// 		</main>
// 	)
// }

// ReactDOM.render(
// 	<UsersList />, document.getElementById('root')
// );
// Что надо вставить вместо ХХХ, чтобы код заработал?
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//   const getUser = (user: string) => <li>{user}</li>
//   const usersList = users.map(el => <li>{el}</li>)

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {usersList}
//       </ul>
//     </main>
//   )
// }

// ReactDOM.render(
//   <UsersList />, document.getElementById('root')
// );

// // Что надо вставить вместо XXX, чтобы код заработал?
// // ❗ Ответ дать минимально возможным объёмом кода

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//   const getUser = (user: string) => <li>{user}</li>
//   const usersList = users.map(getUser)
//   console.log(Array.isArray(usersList));

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {usersList}
//       </ul>
//     </main>
//   )
// }

// ReactDOM.render(
//   <UsersList />, document.getElementById('root')
// );
// // Что вернёт выражение: Array.isArray(usersList)?

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//   const getUser = (user: string) => <li>{user}</li>
//   console.log(typeof getUser);

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {users.map(getUser)}
//       </ul>
//     </main>
//   )
// }

// ReactDOM.render(
//   <UsersList />, document.getElementById('root')
// );
// // Что вернёт выражение: typeof getUser?

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//   id: number
//   name: string
//   age: number
// }

// function User(props: UserType) {
//   return (
//     <li>User {props.name}: {props.age} y.o.</li>
//   )
// }

// function UsersList() {
//   const state = [
//     { id: 1, name: "Bob", age: 34 },
//     { id: 2, name: "Alex", age: 25 },
//     { id: 3, name: "Ann", age: 30 },
//     { id: 4, name: "John", age: 23 },
//   ]
//   const users = [
//     { id: 1, userName: "Bob", age: 34 },
//     { id: 2, userName: "Alex", age: 25 },
//     { id: 3, userName: "Ann", age: 30 },
//     { id: 4, userName: "John", age: 23 },
//   ]

//   const [usersList, setUsersList] = useState<Array<UserType>>(state)
//   return (
//     <main>
//       <h5>User list:</h5>
//       <p>Тут будет список пользователей</p>
//     </main>
//   )
// }

// ReactDOM.render(
//   <UsersList />, document.getElementById('root')
// );
// // Что надо написать вместо XXX, чтобы код работал?
// // ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// // ❗ Ответ дать минимально возможным объёмом кода

// export const Wrapper = () => {
//   return <Coffee city="minsk" />
// }
// type PropsType = {
//   city: string
// }
// export const Coffee: React.FC<PropsType> = (props) => {
//   return <div>hello</div>
// }

// /*
// В коде в разных местах допущена одна и та же ошибка.
// Какое слово должно быть написано вместо ошибочного?
// */

// import ReactDOM from 'react-dom'

// export const YoutubeVideoBlock = () => {
//   return <div>
//     <VideoHeader />
//     <VideoContent />
//     <VideoStatistics />
//   </div>
// }
// export const VideoHeader = () => {
//   return <div>
//     😀 Заголовок видео
//   </div>
// }
// export const VideoContent = () => {
//   return <div>
//     📼 Контент видео
//   </div>
// }
// export const VideoStatistics = () => {
//   return <div>
//     📊 Статистика лайков
//   </div>
// }

// ReactDOM.render(<div><YoutubeVideoBlock /></div>,
//   document.getElementById('root')
// );

// //Что нужно написать вместо ххх, чтобы на экране увидеть:
// //😀 Заголовок видео
// //📼 Контент видео
// //📊 Статистика лайков
// // ❗ Ответ дать минимально возможным объёмом кода 


// type UserPropsType = {
// 	name: string
// 	description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
// 	return <div>
// 		<h1>Имя: {props.name}</h1>
// 		<div>Описание: {props.description}</div>
// 	</div>
// }

// //Что нужно написать вместо ххх, что бы код работал?

//!!!!!!!!!------------//////-------///////-------///////-------///////-------///////-------///////-------

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
// 	id: number
// 	name: string
// 	age: number
// }

// function User(props: UserType) {
// 	return (
// 		<li>Student {props.name}: {props.age} y.o.</li>
// 	)
// }

// function UsersList() {
// 	const data: Array<UserType> = [
// 		{ id: 1, name: "Bob", age: 34 },
// 		{ id: 2, name: "Alex", age: 29 },
// 		{ id: 3, name: "Ann", age: 25 },
// 		{ id: 4, name: "John", age: 36 },
// 	]
// 	const [users, setUsers] = useState<Array<UserType>>(data)
// 	return (
// 		<main>
// 			<h4>User list:</h4>
// 			<ul>
// 				{
// 					users.map(u => <User key={u.id}
// 						id={u.id}
// 						name={u.name}
// 						age={u.age}
// 					/>
// 					)
// 				}
// 			</ul>
// 		</main>
// 	)
// }

// ReactDOM.render(
// 	<UsersList />, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал оптимально?
//
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
// 	id: number
// 	name: string
// 	age: number
// }
//
// function User(props: UserType) {
// 	return (
// 		<li>Student {props.name}: {props.age} y.o.</li>
// 	)
// }
//
// function UsersList() {
// 	const data: Array<UserType> = [
// 		{ id: 1, name: "Bob", age: 34 },
// 		{ id: 2, name: "Alex", age: 29 },
// 		{ id: 3, name: "Ann", age: 25 },
// 		{ id: 4, name: "John", age: 36 },
// 	]
// 	const [users, setUsers] = useState<Array<UserType>>(data)
// 	return (
// 		<main>
// 			<h4>User list:</h4>
// 			<ul>
// 				{users.map(u =>
// 					<User key={u.id} {...u} />
// 				)}
// 			</ul>
// 		</main>
// 	)
// }
//
// ReactDOM.render(
// 	<UsersList />, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
// 	id: number
// 	name: string
// 	age: number
// }

// function User(props: UserType) {
// 	return (
// 		<li>User {props.name}: {props.age} y.o.</li>
// 	)
// }

// function UsersList() {
// 	const data: Array<UserType> = [
// 		{ id: 1, name: "Bob", age: 25 },
// 		{ id: 2, name: "Alex", age: 28 },
// 		{ id: 3, name: "Ann", age: 23 },
// 		{ id: 4, name: "John", age: 30 },
// 	]
// 	const [users, setUsers] = useState<Array<UserType>>(data)
// 	// Пользователи старше 25 лет:
// 	const olderThen25Users = users.filter(u => u.age > 25)
// 	return (
// 		<main>
// 			<h4>User list:</h4>
// 			<ul>
// 				{olderThen25Users.map(u => <User key={u.id} {...u} />)}
// 			</ul>
// 		</main>
// 	)
// }

// ReactDOM.render(
// 	<UsersList />, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
// 	id: number
// 	name: string
// 	age: number
// }

// function User(props: UserType) {
// 	return (
// 		<li>User {props.name}: {props.age} y.o.</li>
// 	)
// }

// function UsersList() {
// 	const data: Array<UserType> = [
// 		{ id: 1, name: "Bob", age: 25 },
// 		{ id: 2, name: "Alex", age: 28 },
// 		{ id: 3, name: "Ann", age: 23 },
// 		{ id: 4, name: "John", age: 30 },
// 	]
// 	const [users, setUsers] = useState<Array<UserType>>(data)
// 	// Необходимо отрендерить список пользователей старше 25 лет:
// 	const getOlderThen25Users = (u: UserType) => u.age > 25
// 	const olderThen25Users = users.filter(getOlderThen25Users)
// 	return (
// 		<main>
// 			<h4>User list:</h4>
// 			<ul>
// 				{olderThen25Users.map(u => <User key={u.id} {...u} />)}
// 			</ul>
// 		</main>
// 	)
// }

// ReactDOM.render(
// 	<UsersList />, document.getElementById('root')
// );

// // Что надо написать вместо xxx, чтобы код работал?


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
// 	id: number
// 	name: string
// 	age: number
// }

// function User(props: UserType) {
// 	return (
// 		<li>User {props.name}: {props.age} y.o.</li>
// 	)
// }

// function UsersList() {
// 	const data: Array<UserType> = [
// 		{ id: 1, name: "Bob", age: 25 },
// 		{ id: 2, name: "Alex", age: 28 },
// 		{ id: 3, name: "Ann", age: 23 },
// 		{ id: 4, name: "John", age: 30 },
// 	]
// 	const [users, setUsers] = useState<Array<UserType>>(data)
// 	// Необходимо отрендерить список ользователей старше 25 лет:
// 	const getOlderThen25Users = (u: UserType) => u.age > 25
// 	const olderThen25Users = users.filter(getOlderThen25Users)
// 	console.log(Array.isArray(olderThen25Users));

// 	return (
// 		<main>
// 			<h4>User list:</h4>
// 			<ul>
// 				{olderThen25Users.map(u => <User key={u.id} {...u} />)}
// 			</ul>
// 		</main>
// 	)
// }

// ReactDOM.render(
// 	<UsersList />, document.getElementById('root')
// );
// // Что вернёт выражение: Array.isArray(olderThen25Users)


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
// 	id: number
// 	name: string
// 	age: number
// }

// type UserPropsType = UserType & {
// 	deleteUser: (id: number) => void
// }

// function User(props: UserPropsType) {
// 	const deleteUser = () => props.deleteUser(props.id)
// 	return (
// 		<li>
// 			<button onClick={deleteUser}>x</button>
// 			User {props.name}: {props.age} y.o.
// 		</li>
// 	)
// }

// function UsersList() {
// 	const data: Array<UserType> = [
// 		{ id: 1, name: "Bob", age: 25 },
// 		{ id: 2, name: "Alex", age: 28 },
// 		{ id: 3, name: "Ann", age: 23 },
// 		{ id: 4, name: "John", age: 30 },
// 	]
// 	const [users, setUsers] = useState<Array<UserType>>(data)
// 	const deleteUser = (userID: number) => {
// 		const filteredUsers = users.filter(u => u.id !== userID)
// 		setUsers(filteredUsers)
// 	}
// 	return (
// 		<main>
// 			<h4>User list:</h4>
// 			<ul>
// 				{users.map(u => <User
// 					key={u.id}
// 					{...u}
// 					deleteUser={deleteUser}
// 				/>)}
// 			</ul>
// 		</main>
// 	)
// }

// ReactDOM.render(
// 	<UsersList />, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Button() {
// 	return <button
// 		onClick={() => alert()}
// 	>Click</button>
// }


// ReactDOM.render(
// 	<Button />, document.getElementById('root')
// );





// // Что надо написать вместо ххх,
// // что бы на странице появился пустой alert при клике по кнопке?

// import React, { MouseEvent } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Button() {
// 	const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
// 		console.log((typeof e) === 'object')
// 	}
// 	return <button onClick={onClickHandler} >Click</button>
// }


// ReactDOM.render(
// 	<Button />, document.getElementById('root')
// );

// // Какой тип данных представляет аргумент функции-обработчика?
// // Что надо написать вместо ххх, что бы в консоль вывело true?


// import React, { useState, MouseEvent } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Button() {
// 	const [tagName, setTagName] = useState<string>()
// 	const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
// 		setTagName(e.currentTarget.tagName)
// 	}
// 	return (
// 		<>
// 			<p>{tagName}</p>
// 			<button onClick={onClickHandler} >
// 				<span>Click</span>
// 			</button>
// 		</>
// 	)
// }

// ReactDOM.render(
// 	<Button />, document.getElementById('root')
// );

// // Что надо написать вместо ххх, что бы на странице появился текст BUTTON?


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
// 	id: number
// 	name: string
// 	age: number
// }

// type UserPropsType = UserType & {
// 	deleteUser: (id: number) => void
// }

// function User(props: UserPropsType) {
// 	return (
// 		<li>
// 			<button onClick={() => props.deleteUser(props.id)}>x</button>
// 			User {props.name}: {props.age} y.o.
// 		</li>
// 	)
// }

// function UsersList() {
// 	const data: Array<UserType> = [
// 		{ id: 1, name: "Bob", age: 25 },
// 		{ id: 2, name: "Alex", age: 28 },
// 		{ id: 3, name: "Ann", age: 23 },
// 		{ id: 4, name: "John", age: 30 },
// 	]
// 	const [users, setUsers] = useState<Array<UserType>>(data)
// 	const deleteUser = (userID: number) => {
// 		setUsers(users.filter(u => u.id !== userID))
// 	}
// 	return (
// 		<main>
// 			<h4>Users list:</h4>
// 			<ul>
// 				{users.map(u => <User
// 					key={u.id}
// 					{...u}
// 					deleteUser={deleteUser}
// 				/>)}
// 			</ul>
// 		</main>
// 	)
// }

// ReactDOM.render(
// 	<UsersList />, document.getElementById('root')
// );
// // В типе UserPropsType у функции deleteUser в параметрах указан тип "any".
// // Какой тип было бы указать правильнее?


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={() => props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?



// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={deleteUser}>Delete</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const updatedUsers = users.filter(u => u.id !== userID)
//         setUsers(updatedUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// // Что надо написать вместо xxx, чтобы код работал?


// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Post() {
//     const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
//         // xxx
//         e.preventDefault()
//         alert("Летим-бомбим!!!")
//     }
//     return (
//         <div>
//             <article>
//                 <h4>Как дела, братан?</h4>
//                 <p>
//                     Вижу, что неплохо. Давай, трудись )))
//                     Google ждёт тебя в цифровом рабстве!
//                     Cтавь лайк и полетели!!!
//                 </p>
//                 <a href={"https://www.youtube.com/"}
//                    onClick={onClickHandler}
//                 >В этом месте подробнее...</a>
//             </article>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <Post/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы Вас не направило на страницу Youtube
// // при клике по ссылке?


// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function AuthForm() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         // xxx
//
//         e.preventDefault()
//         alert()
//     }
//     return (
//         <form>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Name:
//                     <input type={"email"} name={"email"}/>
//                 </label>
//             </div>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Password:
//                     <input type={"password"} name={"password"}/>
//                 </label>
//             </div>
//             <button
//                 onClick={onClickHandler}
//                 type={"submit"}>
//                 Log in
//             </button>
//         </form>
//     )
// }
//
// ReactDOM.render(
//     <AuthForm/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы данные из формы
// // не отправлялись на сервер и страница не перезагружалась
// // при клике по кнопке?



// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>  )=> setUserName(e.currentTarget.value)
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 onChange={onChangeHandler}
//             />
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы правильно типизировать
// // параметр функции?


// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 // xxx
//                 value={userName}
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы инпут был контролируемым?
//



// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     const [text, setText] = useState<string>("")
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)
//     return (
//         <div>
//             <input
//                 value={userName}
//                 onChange={onChangeHandler}
//                 onBlur={()=> {
//                     // xxx
//                     setUserName('')
//                     setText(userName)
//                 }}
//             />
//             <p>{text}</p>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх,
// // чтобы после вывода текста в параграф содержимое формы ввода очищалось?


// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur = {addNote}
//             />
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map((n,i )=> <p key={i}>{n}</p>)}
//             </div>
//         </div>
//     )
// }
//
//
// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх,
// // чтобы при потере инпутом фокуса добавлялась заметка?




// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur={addNote}
//             />
//             <div>
//                 <button
//                     onClick={()=>{setNotes([])}} // здесь был ХХХ
//                 >Clear notes list</button>
//             </div>
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map(n => <p>{n}</p>)}
//             </div>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх,
// // чтобы при клике список заметок очищался?


//! ! ! TOTAL

// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         //<div>Описание: {ххх}</div>
//     </div>
// }
//
// //Что нужно написать вместо ххх, что бы код работал?





// 2 task === //// ==== ///// ===== //// =======================================//

//
// import React from 'react';
// import ReactDOM from 'react-dom';
// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl?: string
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return (
//         <User a={props.age} n={props.name} />
//     )
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return (
//         <div>
//             name: {props.n}, age: {props.a}
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <Page age={23} name={'vvv'}/>, document.getElementById('root')
// );
//
// // Что нужно написать вместо xxx и yyy?
// // Ответ дайте через пробел, например: blabla onClick(props)





// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return (
//         <div>
//             title: {props.wallet.title}, amount: {props.wallet.amount}
//         </div>
//     )
// }
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={wallets[0]} />
//         <UserWallet wallet={wallets[0]} />
//     </div>
// }
// ReactDOM.render(
//     <UserMoney/>, document.getElementById('root')
// );
// //Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?
//     //Ответ дайте через пробел, например: props.x wallets



// import ReactDOM from 'react-dom'
//
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
//
//
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
//
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
//
// export const App = () => {
//     return <div>
//         <Granny name ={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )



// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     console.log(results.length)
//     const users = results[0]
//     const setUsers = results[1]
//
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// // Чему равно results.length?


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     console.log(typeof setUsers)
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: typeof setUsers?


// 7 task =====================///===============================///===================

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const state = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 25},
//         {id: 3, name: "Ann", age: 30},
//         {id: 4, name: "John", age: 23},
//     ]
//     const users = [
//         {id: 1, userName: "Bob", age: 34},
//         {id: 2, userName: "Alex", age: 25},
//         {id: 3, userName: "Ann", age: 30},
//         {id: 4, userName: "John", age: 23},
//     ]
//
//     const [usersList, setUsersList] = useState<Array<UserType>>(state)
//     return (
//         <main>
//             <h5>User list:</h5>
//             <p>Тут будет список пользователей</p>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // // Что надо написать вместо XXX, чтобы код работал?
// // // ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// // // ❗ Ответ дать минимально возможным объёмом кода



// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//     const olderThen25Users = users.filter(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?



// import React, {MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         console.log((typeof e) === "object")
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }
//
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
//
// // Какой тип данных представляет аргумент функции-обработчика?
// // Что надо написать вместо ххх, что бы в консоль вывело true?



// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={() => props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?



// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 // xxx
//                 value={userName}
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы инпут был контролируемым?



// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur={addNote}
//             />
//             <div>
//                 <button
//                     onClick={()=>{setNotes([])}}
//                 >Clear notes list</button>
//             </div>
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map(n => <p>{n}</p>)}
//             </div>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх,
// // чтобы при клике список заметок очищался?


//======//=======//=======//=======//========//=======//=======//

// exam 3 week


// import React, {useState, MouseEvent, ChangeEvent} from 'react';
//  import ReactDOM from 'react-dom';
//
// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
//     const result: Array<string> = []
//     friends[st_1.id].forEach(f => friends[st_2.id].includes(f)? result.push(f): null)
//     return result
// }
//
// //Дан массив студентов и структура,
// //которая содержит список друзей каждого из студентов.
// // Так же дана функция  getMutualFriends, проверяющая наличие общих друзей
// // у двух выбранных студентов.
// //Функция принимает параметром два объекта типа StudentType
// // и возвращает массив с именами общих друзей,
// //если они есть и пустой массив, если таковых нету.
// // Что надо написать вместо ххх, чтобы функция работала?
//
//
//
//
//
// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );


// import React, {useState} from "react";
//
// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }
//
// type AddressType = {
//     country: string
//     city: string
//     email: string
// }
//
// type AdressesType = {
//     [userID: string]: AddressType
// }
//
//
// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]
//
// export const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},
//
// }
//
// export const changeUserStatus = (userID: number, status: string) => {
//     return users.map(u => u.id === userID ? {...u, status} : u)
// }
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция changeUserStatus, которая меняет статус пользователя.
// // Что надо написать вместо ххх, чтобы функция работала корректно?


// import React, {useState} from "react";
//
// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }
//
// type AddressType = {
//     country: string
//     city: string
//     email: string
// }
//
// type AdressesType = {
//     [userID: string]: AddressType
// }
//
// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]
//
// const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},
//
// }
//
// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//     return {...addresses,
//         [userID]: {...addresses[userID], [key]: newValue}
//     }
// }
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция updateUserAddress,
// // которая обновляет указанное в параметрах поле в адресе пользователя.
// // Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// // Что надо написать вместо ххх, чтобы функция работала корректно?


// import React, {useState} from "react";
//
// type samuraiType = {
//     id: string
//     name: string
//     status: "online" | "offline"
// }
// type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
// type CourseType = {
//     name: CourseNameType
//     mentor: string
//     isDone: boolean
// }
// type TechnologiesType = {
//     [userID: string]: Array<CourseType>
// }
//
// const samuraiID_1 = "64jf-87kg"
// const samuraiID_2 = "90lg-34ks"
// const samuraiID_3 = "12jm-05fd"
//
// export const samurai: Array<samuraiType> = [
//     {id: samuraiID_1, name: "Bob", status: "online"},
//     {id: samuraiID_2, name: "Alex", status: "offline"},
//     {id: samuraiID_3, name: "Ann", status: "offline"},
// ]
//
// export const technologies: TechnologiesType = {
//     [samuraiID_1]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_2]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: true},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_3]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: false},
//     ],
// }
//
// export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
//     return {...technologies,
//         [samuraiID]: technologies[samuraiID].map(c => c.name === name ? {...c, isDone} : c)
//     }
// }
// // Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// // которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// // Так же дана функция updateCourseStatus,
// // которая позволяет отметить курс как пройденный самураем или снять такую отметку
// // Что надо написать вместо ххх, чтобы функция работала корректно?


// Среда 1 экзамен//======////=======

// import React, {useState} from "react";
//
// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
//
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case XXX:
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// //Какой тип должен быть вместо XXX?

// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-STATUS-CHANGED':
//             return {
//                 ...state,
//                 status: action.status
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }
//
// const newState = playerReducer(state, changeTrackPlayStatusAC('Paused'))
// console.log(newState.status === 'Paused')
//
// //Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true


// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-VOLUME-CHANGED':
//             return {
//                 ...state,
//                 volume: action.volumeLevel
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeVolumeAC = (volumeLevel: number) => ({type: 'TRACK-VOLUME-CHANGED', volumeLevel})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)
//
// // Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.

// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-LIKED':
//             return {
//                 ...state,
//                 [action.trackId]: {
//                     ...state[action.trackId],
//                     likesCount: state[action.trackId].likesCount + 1
//                 }
//             }
//         default:
//             return state
//     }
// }
//
// const likeTrackAC = (trackId: number) => ({type: 'TRACK-LIKED', trackId})
//
//
// const state = {
//     12: {id: 12, likesCount: 10},
//     14: {id: 14, likesCount: 2},
//     100: {id: 100, likesCount: 0},
// }
// const newState = reducer(state, likeTrackAC(14))
//
// console.log(newState[14].likesCount === 3)
//
// // Что нужно написать вместо XXX, чтобы в консоли увидеть true?
// // ❗ Захардкодженные значения использовать запрещено


// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-ADDED':
//             return [...state, {likesCount: 0}]
//         default:
//             return state
//     }
// }
//
// const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})
//
//
// const state = [
//     {id: 12, likesCount: 10},
//     {id: 14, likesCount: 2},
//     {id: 100, likesCount: 0}
// ]
// const newState = reducer(state, addTrackAC(300))
//
// console.log(newState[3].likesCount === 0)
//
// // Что нужно написать вместо XXX, чтобы трек корректно добавился и в консоли увидеть true?


// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-DELETED':
//             return state.filter((track: any) => track.id !== action.trackId)
//         default:
//             return state
//     }
// }
//
// const deleteTrackAC = (trackId: number) => ({type: 'TRACK-DELETED', trackId})
//
//
// const state = [
//     {id: 12, likesCount: 10},
//     {id: 14, likesCount: 2},
//     {id: 100, likesCount: 0}
// ]
// const newState = reducer(state, deleteTrackAC(14))
//
// console.log(newState.length === 2)
//
//
// // Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?



// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
// }
//
// export const reducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-URL-CHANGED':
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         case 'TRACK-MUTED':
//             return {
//                 ...state,
//                 volume: 0
//             }
//         case 'TRACK-REWOUND-TO-START':
//             return {
//                 ...state,
//                 currentPlayPosition: 0
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// // перемотатьНаНачало:
// const rewindToStart = () => ({type: 'TRACK-REWOUND-TO-START'})
//
// // Какие типы должны быть вместо XXX, YYY и ZZZ?
// // Ответ дать через пробел, например:   'BLABLA' 'HEYНЕY' 'HIPHOP'



// EXAM # 12   =========////=========================////=====================

// import React, {useState} from "react";
//
// import {combineReducers, createStore} from 'redux'
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// const store = createStore(combineReducers({
//     users: usersReducer
// }))
//
// store.subscribe(() => {      ///////========//////////============/////////========
//     console.log('state changed')
// })
//
// store.dispatch({type: 'ANY'})
//
// // Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?




// import {combineReducers, createStore} from 'redux'
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// const store = createStore(combineReducers({
//     users: usersReducer
// }))
//
// store.subscribe(() => {
//     const state = store.getState()   /////// =====================////////////////=========/////
//     console.log(state)
// })
//
// store.dispatch({type: 'ANY'})
//
// //Что нужно написать вместо XXX, чтобы получить актуальный стейт?





// import {combineReducers, createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector} from 'react-redux'
// import React from 'react'
//
// let initialState = {items:
//         [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Ignat'}
//         ]
// }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
//
// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }
//
// let rootReducer = combineReducers({
//     users: usersReducer,
//     auth: authReducer
// })
//
// const store = createStore(rootReducer)
// type RootStateType = ReturnType<typeof rootReducer>
//
// const selector = (state: RootStateType) => state.users.items
//
// const Users = () => {
//
//     const users = store.getState().users.items
//
//     return <ul>
//         {users.map(u => <li key={u.id}>{u.name}</li>)}
//     </ul>
// }
//
// ReactDOM.render(<div>
//         <Provider store={store}>
//             <Users/>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// )
//
// // Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// // ❗ Ответ дать минимально возможным объёмом кода





// import React, {useState, useReducer, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// const changeCounter = (state: number, action: any): number => {
//     switch (action.type) {
//         case "INC_VALUE":
//             return state + 1
//         case "RESET":
//             return 0
//         case "DEC_VALUE":
//             return state - 1
//         default:
//             return state
//     }
// }
//
// function Counter() {
//     const [value, setValue] = useReducer(changeCounter, 0)
//     const [isCounter, setIsCounter] = useState(true)   ////////===================////////////////==============////
//     const commonStyles: React.CSSProperties = {
//         border: "1px solid black",
//         margin: "100px auto",
//         width: "300px",
//         height: "150px",
//         textAlign: "center",
//     }
//     const btnStyles: React.CSSProperties = {
//         color: "white",
//         fontWeight: "bold",
//         backgroundColor: "darkgray",
//         borderRadius: "3px",
//         minWidth: "40px"
//     }
//
//     return (
//         <div style={commonStyles}>{
//             isCounter
//                 ? <div >
//                     <div style={{marginBottom: "20px"}}>
//                         <h2>{value}</h2>
//                         <button
//                             style={{...btnStyles, backgroundColor: "red"}}
//                             onClick={() => setIsCounter(false)}>OFF</button>
//                     </div>
//                     <button style={btnStyles} onClick={() => setValue({type: "INC_VALUE"})}>+</button>
//                     <button style={btnStyles} onClick={() => setValue({type: "RESET"})}>0</button>
//                     <button style={btnStyles} onClick={() => setValue({type: "DEC_VALUE"})}>-</button>
//
//                 </div>
//                 : <div style={{textAlign: "center"}}>
//                     <h2>Counter not working</h2>
//                     <button
//                         style={{...btnStyles, backgroundColor: "green"}}
//                         onClick={() => setIsCounter(true)}>ON</button>
//                 </div>
//         }
//         </div>
//     )
// }
//
//
// ReactDOM.render(
//     <Counter/>, document.getElementById('root')
// );
// // Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.




// import React from 'react'
// import { createStore } from 'redux'
// import { Provider, useSelector, useDispatch } from 'react-redux'
// import ReactDOM from 'react-dom'
//
// type StudentType = {
//     id: number
//     name: string
//     age: number
// }
//
// const initState = {
//     students:
//         [
//             {id: 1, name: 'Bob', age: 23},
//             {id: 2, name: 'Alex', age: 22}
//         ] as Array<StudentType>
// }
// type AddStudentAT = {
//     type: 'ADD-STUDENT'
//     name: string
//     age: number
//     id: number
// }
//
// type InitialStateType = typeof initState
//
// const studentsReducer = (state: InitialStateType = initState, action: AddStudentAT): InitialStateType => {
//     switch (action.type) {
//         case 'ADD-STUDENT':
//             return {
//                 ...state,
//                 students: [...state.students, {
//                     name: action.name,
//                     age: action.age,
//                     id: action.id
//                 }]
//             }
//     }
//     return state
// }
//
// const appStore = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
// const StudentList = () => {
//     const students = useSelector((state: RootStateType) => state.students)
//     return (
//         <ul>
//             {students.map(s => <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>)}
//         </ul>
//     )
// }
// const App = () => {
//     return <StudentList/>
// }
//
// ReactDOM.render(<div>
//         <Provider store={appStore}>
//             <App/>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// )
//
// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?




// import {createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector, useDispatch} from 'react-redux'
// import React from 'react'
//
// const students = {
//     students: [
//         {id: 1, name: 'Bob'},
//         {id: 2, name: 'Alex'},
//         {id: 3, name: 'Donald'},
//         {id: 4, name: 'Ann'},
//     ]
// }
// type RemoveStudentAT = {
//     type: "REMOVE-STUDENT"
//     id: number
// }
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//     type: "REMOVE-STUDENT",
//     id: id
// })
//
// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//     switch (action.type) {
//         case "REMOVE-STUDENT":
//             return {
//                 ...state,
//                 students: state.students.filter(s => s.id !== action.id)
//             }
//     }
//     return state
// }
//
// const store = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
// const StudentList = () => {
//     const listItemStyles = {
//         width: "100px",
//         borderBottom: "1px solid gray",
//         cursor: "pointer",
//     }
//     const students = useSelector((state: RootStateType) => state.students)
//     const dispatch = useDispatch()
//     const studentsList = students.map(s => {
//         const removeStudent = () => {
//             dispatch(RemoveStudentAC(s.id)) //////////===================/////////////////////
//         }
//         return (
//             <li key={s.id}
//                 style={listItemStyles}
//                 onClick={removeStudent}>
//                 {s.name}
//             </li>)
//     })
//     return (
//         <ol>
//             {studentsList}
//         </ol>
//
//     )
// }
//
//
// ReactDOM.render(<div>
//         <Provider store={store}>
//             <StudentList/>
//         </Provider>
//     </div>,
//     document.getElementById('root')
// )
//
// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
// // удалялся из списка? Напишите через пробел.




//==============================///////////////=====================/////////////////////////////

// < ----------------------------- Exam 3 month 3-------------------------->
// <-----------------------------Q 1-------------------------->
// import React, {useCallback, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// export const TempManager = React.memo(() => {
//     const [temp, setTemp] = useState(0)
//     const [seconds, setSeconds] = useState(0)
//
//     const resetTemp = useCallback(()=> {setTemp(0)}, [temp]) /////=================/////=========////// yes!!!!!!
//     const increaseSeconds = () => setSeconds(seconds + 100)
//
//     return (
//         <>
//             <TempDisplay temp={temp} reset={resetTemp}/>
//             <div>
//                 <p><b>Секунды:</b> {seconds} с</p>
//                 <button onClick={increaseSeconds}>
//                     Увеличить время на 100 секунд
//                 </button>
//             </div>
//         </>
//     )
// })
//
// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div>
//             <p><b>Температура</b>: {props.temp} &#176;</p>
//             <button onClick={props.reset}>Reset</button>
//         </div>
//     )
// })
//
// ReactDOM.render(<TempManager/>, document.getElementById('root'))
//
//
// При увеличении времени (при клике на button) компонент TempDisplay
// тоже перерисовывается. Эта перерисовка является избыточной.
// Найдите в чем причина лишних перерисовок.
// Исправленную версию строки напишите в качестве ответа.
//
// Пример ответа: const increaseSeconds = () => setSeconds(seconds + 100)
//
// <-----------------------------Q 2-------------------------->
// import React, { useCallback, useState } from 'react'
// import ReactDOM from 'react-dom'
//
// export const App = () => {
//     const [temp, setTemp] = useState(100)
//     const [seconds, setSeconds] = useState(0)
//
//     const resetTemp = useCallback(() => setTemp(0), [])
//
//     const incSec = useCallback(() => setSeconds(seconds + 1), [seconds]) /////===== yes!!!! ============/////=================///
//
//     return <>
//         <TempDisplay temp={temp} resetTemp={resetTemp}/>
//         <SecDisplay seconds={seconds} incSec={incSec}/>
//     </>
// }
// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div style={{marginBottom: '10px'}} onClick={props.reset}>
//             <p>
//                 <b>Температура: </b>{props.temp} &#176;
//             </p>
//             <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
//         </div>
//     )
// })
//
// const SecDisplay = React.memo((props: any) => {
//     console.log('Render SecDisplay')
//     return (
//         <div>
//             <p><b>Секунды:</b> {props.seconds} c </p>
//             <button style={{marginRight: '20px'}}
//                     onClick={props.incSec}>
//                 Увеличить время на 1 секунду
//             </button>
//         </div>
//     )
// })
//
// ReactDOM.render(<App/>, document.getElementById('root'))
//
// Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
// Найдите в чем причина.
// Исправленную версию строки напишите в качестве ответа
//
// Пример ответа: const incSec = () => setSeconds(seconds + 1)
// <-----------------------------Q 3-------------------------->
// import React, {useCallback, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// export const App = () => {
//     const [temp, setTemp] = useState(10)
//     const [seconds, setSeconds] = useState(100)
//
//     const increaseSeconds = () => setSeconds(seconds + 10)
//     const increaseTemp = useCallback(() => {setTemp(temp + 1)},[temp]) //// ===== NO!!!!!! =========///////////////////////=====//////
//
//     return <>
//         <TempDisplay temp={temp} increaseTemp={increaseTemp}/>
//
//         <div>
//             <b>Секунды :</b> {seconds} с
//             <button style={{marginLeft: '15px'}}
//                     onClick={increaseSeconds}>
//                 Увеличить на 10 секунд
//             </button>
//         </div>
//     </>
// }
// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div style={{marginBottom: '15px'}}
//              onClick={props.reset}>
//             <b>Температура:</b> {props.temp} &#176;
//             <button style={{marginLeft: '15px'}}
//                     onClick={props.increaseTemp}>
//                 Увеличить температуру на 1 градус
//             </button>
//         </div>
//     )
// })
//
// ReactDOM.render(<App/>, document.getElementById('root'));
//
// Что надо написать вместо XXX для того, чтобы обязательно выполнялись 2 условия:
// 1) При нажатии на кнопку "Увеличить температуру на 1 градус" температура увеличивалась
// 2) Компонент TempDisplay не должен перерисовываться при нажатии на кнопку "Увеличить на 10 секунд"
//
// Пример ответа: useEffect(() => setCounter(count + 1), [count])
//
// <-----------------------------Q 4-------------------------->
// import React, {useMemo, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// type ButtonType = {
//     id: number
//     title: string
//     forAdminOnly: boolean
// }
// const buttons: ButtonType[] = [
//     {id: 1, title: 'delete', forAdminOnly: true},
//     {id: 2, title: 'update', forAdminOnly: true},
//     {id: 3, title: 'create', forAdminOnly: false},
// ]
// export const App = ({isAdmin}: { isAdmin: boolean }) => {
//     const [seconds, setSeconds] = useState(0)
//     const increaseSeconds = () => setSeconds(seconds + 10)
//     const correctButtons = useMemo(() => {
//         return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)   //======= yes!!!! ========////=============///////
//     }, [isAdmin])
//     return <>
//         <ButtonsPanel buttons={correctButtons}/>
//         <div>
//             <p>
//                 <b>Секунды: {seconds}</b>
//             </p>
//             <button onClick={increaseSeconds}>
//                 Увеличить на 10 секунд
//             </button>
//         </div>
//     </>
// }
// const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
//     console.log('Render ButtonsPanel')
//     return (
//         <div style={{marginBottom: '15px'}}>
//             <div style={{marginBottom: '15px'}}>
//                 <b>Панель с кнопками</b>
//             </div>
//             <div>
//                 {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
//             </div>
//         </div>
//     )
// })
// ReactDOM.render(<App isAdmin={true}/>, document.getElementById('root'))
//
// Что нужно написать вместо XXX и YYY,
// чтобы избавиться от лишнего перерендера компонента ButtonsPanel
// при нажатии на кнопку "Увеличить на 10 секунд" ?
//
// Ответ дайте через пробел: 111 222