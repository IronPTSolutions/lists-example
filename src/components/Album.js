import React, { Component } from 'react'
import data from '../data/students.json'
import AlbumItem from './AlbumItem'

class Album extends Component {
  state = {
    students: [...data],
    search: ''
  }

  deleteItem = (studentId) => {
    this.setState({
      students: this.state.students.filter(student => student.id !== studentId)
    })
  }

  onSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  filterStudents = () => {
    if (this.state.search) {
      return this.state.students.filter(({ name }) => name.toLowerCase().includes(this.state.search))
    }
    return this.state.students
  }

  render() {
    const students = this.filterStudents()

    return (
      <section className="Album bg-light py-5">
        <div className="container">
          <div className="mx-auto my-5" style={{ maxWidth: '18rem' }}>
            <input type="text" className="form-control" onChange={this.onSearch} />
          </div>

            {students.length ? (
              <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3">
                {students.map(student => (
                  <div className="col" key={student.id}>
                    <AlbumItem {...student} onDelete={() => this.deleteItem(student.id)} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">There are not results with this parameters :(</p>
            )}
        </div>
      </section>
    )
  }
}

export default Album