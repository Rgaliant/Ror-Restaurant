class AddCourseOneCourseTwoCourseThreeCourseFourCourseFiveToMenus < ActiveRecord::Migration[5.2]
  def change
    add_column :menus, :courseOne, :string
    add_column :menus, :courseTwo, :string
    add_column :menus, :courseThree, :string
    add_column :menus, :courseFour, :string
    add_column :menus, :courseFive, :string
  end
end
