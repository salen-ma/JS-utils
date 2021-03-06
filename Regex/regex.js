/**
 * 常用正则
 */

/**
* \ 转义符,在普通字符和元字符之间进行转义
* | 或者
*
* [] 匹配括号中任意一个字符  [\u4e00-\u9fa5]所有汉字
* [^] 排除括号中任意一个字符
* 
* 标识符
* g 全局标识符
* i 忽略大小写标识符
*
* 转义字符
* \d 数字
* \D 非数字
* \s 空格
* \S 非空格
* \w 数字 字母 下划线
* \W 非数字，字母，下划线
* \b 单词的边界符	
* 		\w的左边或右边不是一个\w就存在一个边界符
* \B 非边界符
*
* 限制符
* + 重复出现1次或多次
* * 重复出现0次或多次
* ? 重复出现0次或1次
* {n} 重复出现n次
* {n,} 重复出现n次到多次
* {n,m} 重复出现n次到m次
*
* 分组
* 在正则表达式中，称之为子项表达式或子项
* ()
*  
*  有分组的情况下replace回调函数从第二个参数开始是子项匹配到的数据,直到匹配完所有子项
*  倒数第二个参数是完整匹配到的字符串的下标,倒数第一个是要替换的字符串
*  
*  (?:) 不捕获分组的信息
*
* 反向引用
* 引用整个正则中，分组内的内容
* \1 引用第一组的内容
* \2 引用第二组的内容
* 以此类推
*/

/**
 * test();
 * boolean regexObj.test(string);
 * 匹配返回true 不匹配返回false;
 */

//字符串相关方法
/**
 * search()
 * Number string.search(string|regexObj)
 * 返回数字---匹配到的字符串首次出现的位置
 * 匹配不到返回-1
 *
 * match()
 * Array string.match(string|regexObj)
 * 返回由匹配到字符串组成的数组
 * 匹配不到返回null
 *
 * replace()
 * String string.replace(string|regexObj,string|function)
 * 返回替换后的字符串
 * 匹配不到返回空字符串
 */

// 邮箱验证
let emailRe = /^[\w-]+@[0-9a-z]{2,5}(\.[a-z]{2,3}){1,3}$/i;

// 验证qq
let qqRe = /^[1-9]\d{4,11}$/;

// 验证手机号
let telRe = /^1[34578]\d{9}$/;