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










