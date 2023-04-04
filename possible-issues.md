# Angular 10.2
None
# Angular 11
- If you use Angular Forms with async validators defined at initialization time on class instances of FormControl, FormGroup or FormArray , the status change event was not previously emitted once async validator completed. This has been changed so that the status event is emitted into the statusChanges observable. If your code relies on the old behavior, you can filter/ignore this additional status change event.
# Angular 12
None
# Angular 13
None
Make sure you use Node 12.20 and up
