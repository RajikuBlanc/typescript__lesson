import React from 'react';
import './App.css';
import logo from './logo.svg';
import Data from './data.json';
import TestComponent from './TestComponent';

// json型推定
// 読み込んだデータを手打ちしなくても、typeofを使用することで自動で型がつく
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Users = typeof Data;

// string
let nameChange = 'Hello';
nameChange = 'Hello2';
const Hello = 'Hello';

// number
const dummyNum = 2;

// boolean
let boolean = true;

// array
let array = [true, false, true];
let array2 = [0, 1, 'hello'];

// object
interface Name {
  first: string;
  last?: string | null;
}
const name: Name = { first: 'Yamada', last: 'Taro' };

const func1 = (x: number, y: number): number => {
  return x + y;
};

type Profile = {
  age: number;
  city: string;
};

type Login = {
  username: string;
  password: string;
};

type User = Profile & Login;

const userA: User = {
  age: 23,
  city: '大阪',
  username: 'xxx',
  password: 'yyy',
};

// uniontype
// 複数の型を|(パイプ)を使用して定義
let value: boolean | number;
value = 2;
value = false;

let arrayUni: (boolean | string)[];
arrayUni = [true, false, 'hello'];

let company: 'amazon' | 'apple' | 'google';
company = 'amazon';

let memory: 12 | 24 | 36;
memory = 24;

// typeof
// 型を継承できる
let msg: string = 'hello world';
let msg2: typeof msg = 'hello world';

let animal = { cat: 'small cat' };
let newAnimal: typeof animal = { cat: 'big cat' };

// keyof
// uniontypeで継承
type Key = {
  primary: string;
  secondary: string;
};

let key: keyof Key;
key = 'primary';

const Sports = {
  soccer: 'soccer',
  baseball: 'baseball',
};

let keySports: keyof typeof Sports;

keySports = 'soccer';

// enum
enum OS {
  'Mac',
  'Windows',
  'Linux',
}

interface PC {
  id: number;
  OsType: OS;
}

const PC1: PC = {
  id: 1,
  OsType: OS.Mac,
};

const PC2: PC = {
  id: 2,
  OsType: OS.Windows,
};

// 型の互換性
const comp1 = 'test';
let comp2: string = comp1;

const comp3: string = 'test';
let comp4: 'test' = 'test';

// Generics
// 動的に型を変更できる
// <>のことを型引数という
interface Gen<T> {
  item: T;
}
// デフォルトで型を指定できる
interface Gen2<T = string> {
  item: T;
}

// extendsを使用して使用できる型を制限する
interface Gen3<T extends string | number> {
  item: T;
}

const gen0: Gen<string> = {
  item: 'hello',
};

const gen1: Gen<number> = {
  item: 2,
};

const gen2: Gen2 = {
  item: 'Hello',
};
const gen3: Gen3<string> = {
  item: 'Hello',
};

// 関数のgenerics
function funcGen<T>(props: T) {
  return { item: props };
}
// アロー関数を使用する場合.tsx内では<T>とするとエラーが出る。.ts内では可能
// そのため.tsx内では<T,>カンマをつけることでエラーを避けることができる
const funcGen2 = <T,>(props: T) => {
  return { item: props };
};
// 関数のextends
function funcGen3<T extends string | number>(props: T) {
  return { value: props };
}

// Props
interface Props {
  price: number;
}

function funcGen4<T extends Props>(props: T) {
  return { value: props.price };
}

const funcGen5 = <T extends Props>(props: T) => {
  return { value: props.price };
};

const gen4 = funcGen('test');
const gen5 = funcGen<string | null>('test');
const gen6 = funcGen2<string | null>('test');
const gen7 = funcGen3(3);
const gen8 = funcGen4({ price: 10 });
const gen9 = funcGen5({ price: 4 });

console.log(
  gen9,
  gen8,
  gen7,
  gen6,
  gen5,
  gen4,
  gen3,
  gen0,
  gen1,
  gen2,
  comp2,
  comp3,
  comp4,
  nameChange,
  Hello,
  dummyNum,
  boolean,
  array,
  array2,
  name,
  func1(2, 4),
  userA,
  value,
  arrayUni,
  company,
  memory,
  msg2,
  newAnimal,
  key,
  keySports,
  PC1,
  PC2,
);

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <TestComponent text='Test' />
      </header>
    </div>
  );
};

export default App;
