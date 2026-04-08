import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
//  counter = signal<number>(10);

doubleTheCounter = computed(()=>{
  let doubledVal = this.counter()
  return doubledVal.val
})

  counter = signal<Counter>({
    val: 10
  });

  userInfo = signal<User>({
    userName: "John Doe"
  })

  nums = signal<number[]>([1,2,3]);

  constructor(){
    effect(()=>{
      console.log(this.counter().val);
      console.log(this.userInfo().userName);
      console.log(this.nums());
      
    })
  }

 onClick(){
  // this.counter.set(11);
//   this.counter.update((c)=>{
//     console.log(c);
//     return c + 1;
//   })

// this.counter().val++;
this.counter.update((c)=>{
  return{
    ...c,
    val:c.val + 1
  }
})
}

onUserNameChange(){
  // this.userInfo().userName = "Jane Doe";
  this.userInfo.update(u=>{
    return{
      ...u,
      userName: "Jane Doe"
    }
  })
}

onAppend(){
  // let nums = this.nums();
  // let last = nums[nums.length - 1];
  // nums.push(last + 1);
  this.nums.update(arr=>{
    return [...arr, arr[arr.length - 1] + 1];
  })
}
}
