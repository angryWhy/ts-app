# TypeScript

### 实用程序类型

#### Partial < Type >

构造一个所有属性都`Type`设置为可选的类型。此实用程序将返回一个表示给定类型的所有子集的类型。

意思就是将类型集合，变成可选（title:string    =>    title?:string）

```typescript
//定义Todo类型集合
interface Todo {
  title: string;
  description: string;
}
 //创建todo1实例，Todo类型
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
const todo2 = updateTodo(todo1, 
  //对应，fieldsToUpdate: Partial<Todo>，为什么编译通过，因为Partial<Todo>将类型集合设置可选
  等价于===
  //interface Todo {
  //title?: string;
  //description?: string;
  //}
  {description: "throw out trash",}
                        );
 

```

#### Omit<Type, Keys>

`Type`通过从中选择所有属性然后删除`Keys`（字符串文字或字符串文字的联合）来构造类型。

从目标类型集合中，选中类型然后移除，（第一个参数目标类型集合，第二个参数要移除的类型）

！！！使用场景，自己定义类型和官方或者已定义好的类型冲突，！！！自己创的想覆盖已有类型

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 //操作对象Todo，要移除的类型description，！！！使用string类型
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
```



### 关于定义interface

#### 定义Input，需要继承 InputHTMLAttributes-导出自React

```javascript
import React,{InputHTMLAttributes, ReactElement} from "react"
```

#### 定义Input，需要继承InputAttributes，因为自己定义的接口，并不是Input全部，需要扩展已有接口

```javascript
export interface InputProps extends InputHTMLAttributes<HTMLElement>
    //！！！InputHTMLAttributes<HTMLElement>
```

### 