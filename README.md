# jsonbyxpath

jsonbyxpath 是一个轻量级工具，允许使用 XPath 风格的路径语法来访问和修改 JSON 对象中的属性。它支持层级访问、键值查询以及数据类型解析。

## 安装

使用 npm 安装 jsonbyxpath：

```bash
npm install jsonbyxpath
```

## 使用方法

导入模块：

```javascript
const { parseJSONValueType, getValueByXPath, findValueByXPath, setValueByXPath } = require('jsonbyxpath');
```

### 函数说明

- `parseJSONValueType(value)`: 解析 JSON 数据的类型。
- `findValueByXPath(obj, path)`: 在 JSON 对象中查找指定 XPath 路径的值。
- `getValueByXPath(obj, path)`: 获取指定 XPath 路径的值。
- `setValueByXPath(obj, path, val)`: 在 JSON 对象中设置指定 XPath 路径的值。

### 示例

#### 解析 JSON 数据类型

```javascript
console.log(parseJSONValueType(null)); // 输出: 'null'
console.log(parseJSONValueType([1, 2, 3])); // 输出: 'array'
console.log(parseJSONValueType({ key: 'value' })); // 输出: 'object'
```

#### 查找 JSON 对象中的值

```javascript
const obj = { user: { address: { street: 'Main St' } } };
const path = '0-0:value';
console.log(findValueByXPath(obj, path)); // 输出: 'Main St'
```

#### 获取指定路径的值

```javascript
const obj = { user: { name: 'Alice' } };
console.log(getValueByXPath(obj, '0-0:value')); // 输出: 'Alice'
```

#### 设置 JSON 对象的值

```javascript
const obj = { user: { name: 'Alice' } };
setValueByXPath(obj, '0-0:value', 'Tom');
console.log(obj.user.name); // 输出: 'Tom'
```

### 错误处理

如果路径在对象中不存在，将返回错误信息：

```javascript
const obj = { user: { name: 'Alice' } };
console.log(getValueByXPath(obj, '1-0:value')); // 输出: "xpath '1' is not exist."
```

### 注意事项

- `setValueByXPath` 需要确保父级对象存在，否则会报错。
- 解析路径时，会自动去除空格以确保正确匹配。

## 许可

本项目基于 MIT 许可证授权。

