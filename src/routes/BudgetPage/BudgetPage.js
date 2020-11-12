import React, {Component} from 'react'
import './BudgetPage.css'
import budget_categories from '../../STORE/budget_categories'
import budget_items from '../../STORE/budget_items'

export default class BudgetPage extends Component{

  componentDidMount(){
    console.log(budget_categories)
  }

  renderCategories=()=>{

    let categories = budget_categories.map((category,index)=>{
      return(
        <div key={index}>
          <p style={{backgroundColor:'black',color:'white'}}>{category.category}</p>
          <button onClick={()=>this.deleteCategory(category.id)}>delete category</button>
          <table>
            <thead>
              <tr>
                <th style={{textAlign:'left'}}>Item</th>
                <th>Budgeted Amount</th>
                <th>Actual Amount</th>
              </tr>
            </thead>
            <tbody>
                {this.renderItems(category.id)}
            </tbody>
          </table>
        </div>
      )
    })

    return categories
  }

  deleteCategory=(categoryId)=>{
    console.log(categoryId)
    //make DELETE request for category with id categoryId
  }

  renderItems=(categoryId)=>{
    
    let items = budget_items.map((item,index)=>{
      if(item.category_id===categoryId){
        return(
          <tr key={index}>
              <td>{item.item}</td>
              <td>{item.budgeted_amt.toFixed(2)}</td>
              <td>{item.spent_amt.toFixed(2)}</td>
          </tr>          
        )
      }
    })

    return items
  }

  onAddCategoryFormSubmit=(ev)=>{
    ev.preventDefault()
    console.log(ev.target.categoryName.value)

    //add new category to budget_categories
    budget_categories.push({"id":6,"category":"Test","user_id":1})
    console.log(budget_categories)
    
  }


  renderTotalBudget=()=>{
    let totalBudget=0
    let totalSpent=0
    budget_items.map(item=>{
      totalBudget=totalBudget+item.budgeted_amt
      totalSpent=totalSpent+item.spent_amt
    })

    //console.log('total budgeted is:'+totalBudget.toFixed(2))

    let totalLeft = totalBudget-totalSpent

    return(
      <>
      <p>Total Budget: {totalBudget.toFixed(2)}</p>
      <p>Total Spent: {totalSpent.toFixed(2)}</p>
      <p>Left to Spend: {totalLeft.toFixed(2)}</p>
      </>
    )
  }

  render(){
    return (
        <section>
            <h2>Let's Budget!</h2>
            {this.renderCategories()}
            <form style={{border:'2px solid red'}} onSubmit={this.onAddCategoryFormSubmit}>
              <label htmlFor='categoryName'>Category Name</label>
              <input id='categoryName' name='categoryName'></input>
              <input type='submit' value='Add Category' style={{backgroundColor:'black',color:'white',padding:'5px'}}></input>
            </form>
            <div style={{border:'2px solid blue'}}>
              {this.renderTotalBudget()}
            </div>
        </section>
    )
  }
  
}